import { sendKeyResponse, sendCustomResponse } from "@/components/responses";

const handler = async (req, res) => {
	if (req.method === "GET") {
		try {
			const isTestnet = req.query.isTestnet;

			if (isTestnet === undefined || (isTestnet !== "true" && isTestnet !== "false")) {
				sendKeyResponse(res, "BAD_REQUEST");
				return;
			}

			const apiUrl = isTestnet === "true" ? "https://staging.li.quest/v1" : "https://li.quest/v1";

			const data = await fetch(`${apiUrl}/chains`, {
				method: "GET",
				headers: { accept: "application/json" },
			});

			const chains = await data.json();

			sendCustomResponse(res, "SUCCESS", chains);
		} catch (err) {
			sendKeyResponse(res, "BAD_REQUEST");
		}
	} else {
		sendKeyResponse(res, "INVALID_ROUTE");
	}
};

export default handler;
