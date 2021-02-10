import getAuthCode from "@magister/getAuthCode";

const Code = async (req, res) => {
	res.end(await getAuthCode());
};
export default Code;
