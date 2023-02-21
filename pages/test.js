import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, List, Input } from "@/components/ui";

const Test = () => {
	const [isTestnet, setIsTestnet] = useState(true);

	const [inputs, setInputs] = useState({
		fromChains: undefined,
		fromTokens: undefined,
		toChains: undefined,
		toTokens: undefined,
	});

	const [swap, setSwap] = useState({
		fromChainId: undefined,
		toChainId: undefined,
		fromTokenAddress: undefined,
		toTokenAddress: undefined,
		fromAddress: "",
		fromAmount: 0,
	});

	const getChains = async () => {
		try {
			const res = await fetch(`/api/v1/get/chains?isTestnet=${isTestnet}`);
			const data = await res.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	};

	const getTokens = async (chain) => {
		try {
			const res = await fetch(`/api/v1/get/tokens?isTestnet=${isTestnet}&chains=${chain}`);
			const data = await res.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	};

	const editSwap = (parent, value) => {
		setSwap({
			...swap,
			[parent]: value,
		});
	};

	const getRoutes = async (chain) => {
		try {
			const res = await fetch(
				`/api/v1/get/routes?isTestnet=${isTestnet}&fromChainId=${swap.fromChainId}&toChainId=${swap.toChainId}&fromTokenAddress=${swap.fromTokenAddress}&toTokenAddress=${swap.toTokenAddress}&fromAddress=${swap.fromAddress}&fromAmount=${swap.fromAmount}`
			);
			const data = await res.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const changeChains = async () => {
			if (inputs.fromChains !== undefined) {
				const chains = await getChains();
				setInputs({
					...inputs,
					fromChains: chains.chains,
					toChains: chains.chains,
				});
			}
		};

		changeChains();
	}, [isTestnet]);

	useEffect(() => {
		const fetchSwapDetails = async () => {
			if (inputs.fromChains === undefined) {
				const chains = await getChains();

				setInputs({
					...inputs,
					fromChains: chains.chains,
					toChains: chains.chains,
				});
			}

			if (swap.fromChainId !== undefined) {
				const fromTokens = await getTokens(swap.fromChainId);

				setInputs({
					...inputs,
					fromTokens: fromTokens.tokens,
				});
			}

			if (swap.toChainId !== undefined) {
				const toTokens = await getTokens(swap.toChainId);

				setInputs({
					...inputs,

					toTokens: toTokens.tokens,
				});
			}
		};

		fetchSwapDetails();
	}, [swap]);

	return (
		<>
			<Head>
				<title>Testing</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center min-h-screen p-3 place-content-start bg-isGrayLightEmphasis6">
				<div className="flex flex-row items-center space-x-3">
					<Button
						onClick={() => {
							setIsTestnet(!isTestnet);
						}}
						cta="Testnet"
						props={{
							intent: isTestnet ? "success" : "error",
						}}
					/>
					<Button
						onClick={async () => {
							const chains = await getChains();
							console.log(chains);
						}}
						cta="Get Chains"
					/>
					<Button
						onClick={async () => {
							const tokens = await getTokens("80001");
							console.log(tokens);
						}}
						cta="Get Tokens"
					/>
				</div>

				<div className="grid w-full grid-cols-3 gap-3 mt-3 max-w-7xl">
					<Input
						onChange={editSwap}
						parent="fromAddress"
						value={swap.fromAddress}
						placeholder="From Address"
						type="text"
						props={{ className: "col-span-2", intent: "white" }}
					/>
					<Input
						onChange={editSwap}
						parent="fromAmount"
						value={swap.fromAmount}
						placeholder="From Amount"
						type="number"
						props={{ className: "col-span-1", intent: "white" }}
					/>
				</div>

				<div className="grid w-full grid-cols-4 gap-3 mt-3 max-w-7xl">
					<List
						cta="From Chain"
						arr={inputs.fromChains}
						currActive={swap.fromChainId}
						onClick={editSwap}
						property="id"
						display="name"
						parent="fromChainId"
					/>
					<List
						cta="From Token"
						arr={inputs.fromTokens}
						currActive={swap.fromTokenAddress}
						onClick={editSwap}
						property="address"
						display="name"
						parent="fromTokenAddress"
					/>
					<List
						cta="To Chain"
						arr={inputs.toChains}
						currActive={swap.toChainId}
						onClick={editSwap}
						property="id"
						display="name"
						parent="toChainId"
					/>
					<List
						cta="To Token"
						arr={inputs.toTokens}
						currActive={swap.toTokenAddress}
						onClick={editSwap}
						property="address"
						display="name"
						parent="toTokenAddress"
					/>
				</div>

				<div className="mt-3">
					<Button
						onClick={async () => {
							const routes = await getRoutes();
							console.log(routes);
						}}
						cta="Get Routes"
					/>
				</div>
			</main>
		</>
	);
};

export default Test;
