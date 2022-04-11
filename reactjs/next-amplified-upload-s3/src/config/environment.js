const environment = {
  identityPoolId: process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_APP_CLIENT_ID,
  bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
};

export default environment;
