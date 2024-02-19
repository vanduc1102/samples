import express from "express";
import jwt from "jsonwebtoken";
import { JwksClient, expressJwtSecret } from "jwks-rsa";
import { expressjwt as expressJwt } from "express-jwt";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    "/required-token",
    expressJwt({
        secret: expressJwtSecret({
            kid: "app-id-01",
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 2,
            jwksUri: "http://0.0.0.0:5010/wellknown/jwks.json",
        }),
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

app.post("/parsing-jwt", async function (req, res) {
    const body = req.body;
    const client = new JwksClient({
        jwksUri: "http://0.0.0.0:5010/wellknown/jwks.json",
        requestHeaders: {},
        timeout: 30000,
    });
    const key = await client.getSigningKey();
    const signingKey = key.getPublicKey();

    const { token } = body;

    res.status(200).json({
        signingKey,
        token,
        payload: jwt.verify(token, signingKey, { algorithms: ["RS256"] }),
    });
});

app.use("/", (req, res) => res.status(200).send("HEALTHY from Client"));

const { CLIENT_PORT: port = 5011 } = process.env;

app.listen({ port }, () => {
    console.log(`🚀 Client ready at http://0.0.0.0:${port}`);
});
