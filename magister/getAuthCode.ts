import fetch from "node-fetch";
import fs from "fs";
import { join } from "path";
const cacheFile = join(process.cwd(), "accountjsurl.txt");
const baseUrl = "https://accounts.magister.net";

if (fs.existsSync(cacheFile)) {
	var accountJsUrl = fs.readFileSync(cacheFile).toString();
}
const updateJSUrl = async (): Promise<string> => {
	var returnUrl = encodeURIComponent("/connect/authorize/callback?client_id=iam-profile&redirect_uri=https://accounts.magister.net/&response_type=id_token token&scope=openid profile email magister.iam.profile&state=a&nonce=a");
	var url = `${baseUrl}/account/login?returnUrl=${returnUrl}`;
	var res = await fetch(url);

	var html = await res.text();
	accountJsUrl = baseUrl + "/" + html.match(/js\/account-.*\.js/)[0];
	fs.writeFileSync(cacheFile, accountJsUrl);
	return await getAuthCode();
};

const getAuthCode = async (): Promise<string> => {
	if (!accountJsUrl) {
		return updateJSUrl();
	}
	var res = await fetch(accountJsUrl);
	if (res.status === 200) {
		var js = await res.text();
		var tokens = JSON.parse(js.match(/\[".{6}",".{6}",".{6}",".{6}"\]/)[0]);
		var which = JSON.parse(js.match(/\["\d","\d"\]/));

		return tokens.slice(which[0], parseInt(which[1]) + 1).join("");
	} else if (res.status === 404) {
		return updateJSUrl();
	}
};
export default getAuthCode;
