import { Amplify } from "@aws-amplify/core";
import { Storage } from "@aws-amplify/storage";
import environment from "../config/environment";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      identityPoolId: environment.identityPoolId,
      region: environment.region,
      userPoolId: environment.userPoolId,
      userPoolWebClientId: environment.userPoolWebClientId,
    },
    Storage: {
      bucket: environment.bucket,
      region: environment.region,
      identityPoolId: environment.identityPoolId,
    },
  });
}

export function SetS3Config(bucket, level = "protected") {
  Storage.configure({
    bucket: bucket,
    level: level,
    region: environment.region,
    identityPoolId: environment.identityPoolId,
  });
}
