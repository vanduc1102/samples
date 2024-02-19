import jwt from "jsonwebtoken";
import fs from "fs";
import nodeJose from "node-jose";
const { JWK } = nodeJose;
const PRIVATE_KEY = fs.readFileSync("keys/privateKey.pem");
const PUBLIC_KEY = fs.readFileSync("keys/publicKey.pem");

export function sign(payload, expiresIn = 24 * 60 * 60) {
    return jwt.sign(payload, PRIVATE_KEY, {
        algorithm: "RS256",
        expiresIn,
    });
}

export async function getJWKs() {
    const cryptoKey = await JWK.asKey(PUBLIC_KEY, "pem");
    return [cryptoKey.toJSON()];
}
