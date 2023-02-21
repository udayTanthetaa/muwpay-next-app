import { Codemap } from "./codemap";

const getResponse = (name) => {
	return Codemap[name];
};

const sendKeyResponse = (res, key) => {
	const response = getResponse(key);
	res.status(response.code).json(response);
};

const sendCustomResponse = (res, key, data) => {
	const response = getResponse(key);
	res.status(response.code).json({
		...response,
		...data,
	});
};

export { getResponse, sendKeyResponse, sendCustomResponse };
