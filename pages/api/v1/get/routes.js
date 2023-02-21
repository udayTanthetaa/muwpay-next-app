import LIFI from "@lifi/sdk";
import { sendKeyResponse, sendCustomResponse } from "@/components/responses";

const handler = async (req, res) => {
	if (req.method === "GET") {
		try {
			const isTestnet = req.query.isTestnet;
			const fromChainId = req.query.fromChainId;
			const toChainId = req.query.toChainId;
			const fromTokenAddress = req.query.fromTokenAddress;
			const toTokenAddress = req.query.toTokenAddress;
			const fromAddress = req.query.fromAddress;
			const fromAmount = req.query.fromAmount;

			if (
				isTestnet === undefined ||
				(isTestnet !== "true" && isTestnet !== "false") ||
				fromChainId === undefined ||
				toChainId === undefined ||
				fromTokenAddress === undefined ||
				toTokenAddress === undefined ||
				fromAddress === undefined ||
				fromAmount === undefined
			) {
				sendKeyResponse(res, "BAD_REQUEST");
				return;
			}

			const config = {
				apiUrl: isTestnet ? "https://staging.li.quest/v1/" : "https://li.quest/v1/",
			};
			const lifi = new LIFI(config);

			const routesRequest = {
				fromChainId: parseInt(fromChainId),
				toChainId: parseInt(toChainId),
				fromTokenAddress: fromTokenAddress,
				toTokenAddress: toTokenAddress,
				fromAddress: fromAddress,
				fromAmount: fromAmount,
			};

			const routes = await lifi.getRoutes(routesRequest);

			sendCustomResponse(res, "SUCCESS", routes.routes);
		} catch (err) {
			sendKeyResponse(res, "BAD_REQUEST");
		}
	} else {
		sendKeyResponse(res, "INVALID_ROUTE");
	}
};

export default handler;
