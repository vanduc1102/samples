import express from "express";
import { expressjwt as expressJwt } from "express-jwt";
import fs from "fs";
import { getJWKs, sign } from "../lib/jwtService.js";

const publicKey = fs.readFileSync("keys/publicKey.pem");

const app = express();

app.get("/wellknown/jwks.json", async (req, res) => {
    const keys = await getJWKs();
    res.status(200).json({
        keys,
    });
});

app.use("/get-jwt", (req, res) => {
    const payload = {
        iss: "http://0.0.0.0:5010",
        aud: ["http://0.0.0.0:5011"],
        name: "John Doe",
        email: "john.doe@example.com",
        roles: ["admin", "user"],
    };
    const accessToken = sign(payload);

    const refreshToken = sign(payload, 30 * 24 * 60 * 60);

    res.status(200).json({
        accessToken,
        refreshToken,
    });
});

app.use(
    "/protected",
    expressJwt({
        secret: publicKey,
        algorithms: ["RS256"],
    }),
    (req, res) => {
        console.log("req.auth: ", req.auth);
        res.status(200).json({
            message: "This page is protected",
            payload: req.auth,
        });
    },
);

app.use("/", (req, res) => res.status(200).send("HEALTHY from server"));

const { SERVER_PORT: port = 5010 } = process.env;

app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});
