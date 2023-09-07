import aws from "aws-sdk";

const {
  APP_AWS_ACCESS_KEY,
  APP_AWS_SECRET_KEY,
  APP_AWS_REGION,
} = process.env;

const s3 = new aws.S3({
  accessKeyId: APP_AWS_ACCESS_KEY,
  secretAccessKey: APP_AWS_SECRET_KEY,
  region: APP_AWS_REGION,
});

aws.config.update({
  accessKeyId: APP_AWS_ACCESS_KEY,
  secretAccessKey: APP_AWS_SECRET_KEY,
  region: APP_AWS_REGION,
  signatureVersion: "v4",
});

export default s3;
