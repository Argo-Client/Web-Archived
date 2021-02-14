import getAuthCode from "@magister/getAuthCode";
import { AuthManager } from "magister-openid";
import { Account, TokenSet } from "./types";

const Login = async ({ tenant, username, password }: { tenant: string; username: string; password: string }): Promise<Account> => {
	const manager = new AuthManager(`${tenant}.magister.net`);
	var tokenSet = await manager.login(username, password, await getAuthCode());
	return new Account(new TokenSet(tokenSet));
};

export default Login;
