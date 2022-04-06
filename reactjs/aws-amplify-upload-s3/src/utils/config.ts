import { Amplify } from "@aws-amplify/core";
import { Storage } from "@aws-amplify/storage";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      region: process.env.REACT_APP_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID,
    },
    Storage: {
      bucket: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  });
}

export function SetS3Config(
  bucket: string,
  level: "protected" | "private" | "public" = "protected"
) {
  Storage.configure({
    bucket: bucket,
    level: level,
    region: process.env.REACT_APP_REGION,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
  });
}
