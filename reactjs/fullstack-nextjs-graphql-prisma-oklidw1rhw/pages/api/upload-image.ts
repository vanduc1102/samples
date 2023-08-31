import aws from "aws-sdk";
import type { NextApiRequest, NextApiResponse } from "next";

const {
  APP_AWS_ACCESS_KEY,
  APP_AWS_SECRET_KEY,
  APP_AWS_REGION,
  AWS_S3_BUCKET_NAME,
} = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const s3 = new aws.S3({
      accessKeyId: APP_AWS_ACCESS_KEY,
      secretAccessKey: APP_AWS_SECRET_KEY,
      region: APP_AWS_REGION,
    });

    console.log({});

    aws.config.update({
      accessKeyId: APP_AWS_ACCESS_KEY,
      secretAccessKey: APP_AWS_SECRET_KEY,
      region: APP_AWS_REGION,
      signatureVersion: "v4",
    });

    const post = await s3.createPresignedPost({
      Bucket: AWS_S3_BUCKET_NAME,
      Fields: {
        key: req.query.file,
      },
      Expires: 60,
      Conditions: [["content-length-range", 0, 5048576]],
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
}
