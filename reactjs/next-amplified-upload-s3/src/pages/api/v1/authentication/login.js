// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import AWS from "aws-sdk";
const cognitoIdentity = new AWS.CognitoIdentity({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

export default async function handler(req, res) {
  const params = {
    IdentityPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
    Logins: {
      your_developer_authenticated_identity_name: req.body.userId,
    },
  };

  try {
    const response = await cognitoIdentity
      .getOpenIdTokenForDeveloperIdentity(params)
      .promise();
    return res.json({
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
