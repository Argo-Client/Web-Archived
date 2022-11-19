import fetch from "node-fetch";

const baseUrl = "https://accounts.magister.net";

var accountJsUrl: string;
var authCode: string;

const jsURL = async () => {
	var returnUrl = encodeURIComponent("/connect/authorize/callback?client_id=iam-profile&redirect_uri=https://accounts.magister.net/&response_type=id_token token&scope=openid profile email magister.iam.profile&state=a&nonce=a");
	var url = `${baseUrl}/account/login?returnUrl=${returnUrl}`;
	var res = await fetch(url);

	var html = await res.text();
	return baseUrl + "/" + html.match(/js\/account-.*\.js/)[0];
};
const authCodeFromUrl = async (url: string) => {
	var res = await fetch(url);
	if (res.status === 200) {
		var js = await res.text();
		var tokens: string[] = JSON.parse(js.match(/\["[\d\w]*","[\d\w]*","[\d\w]*","[\d\w]*"\]/gm).reverse()[0]);
		var which: string[] = JSON.parse(js.match(/\["\d","\d"\]/));
		return which.map(g => tokens[parseInt(g)]).join("");
	}
	throw new Error(`res.status != 200, status: ${res.status}`);
};
const getAuthCode = async () => {
	var newUrl = await jsURL();
	if (authCode && newUrl == accountJsUrl) {
		return authCode;
	}
	accountJsUrl = newUrl;
	authCode = await authCodeFromUrl(newUrl);
	return authCode;
};
export default getAuthCode;
