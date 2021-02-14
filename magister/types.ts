export class TokenSet {
	accessToken: string;
	expiresAt: number;
	refreshToken: string;
	constructor(json) {
		this.accessToken = json.access_token;
		this.expiresAt = json.expires_at * 1000;
		this.refreshToken = json.refresh_token;
	}
}
export class Account {
	tokenSet: TokenSet;
	constructor(tokenSet: TokenSet) {
		this.tokenSet = tokenSet;
	}
}
