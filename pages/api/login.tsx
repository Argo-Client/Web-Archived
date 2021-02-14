import Login from "@magister/login";
import schools from "@magister/schools.json";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.cryptr);

import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method == "POST") {
		if (req.body.tenant && req.body.username && req.body.password) {
			if (schools.find(g => g.tenant == req.body.tenant)) {
				let lastPage = req.body.csrf ? cryptr.decrypt(req.body.csrf) : -1e10;
				if (new Date().getTime() - lastPage < 1000 * 60 * 10) {
					await Login(req.body)
						.then(account => {
							res.status(200).json(account);
						})
						.catch((error: Error) => {
							var msg = error.message;
							if (msg == "InvalidUsername") {
								res.status(400).json("Username is invalid");
							} else if (msg == "InvalidUsernameOrPassword") {
								res.status(400).json("Username or password is invalid");
							} else if (msg == "UserLockedOut") {
								res.status(400).json("Account temporarily blocked.");
							} else {
								res.status(500).json(msg);
							}
						});
				} else {
					res.status(419).end("Page Expired");
				}
			} else {
				res.status(400).end("Invalid Tenant");
			}
		} else {
			res.status(400).end("Bad Request");
		}
	} else {
		res.status(405).end("Method Not Allowed");
	}
};
