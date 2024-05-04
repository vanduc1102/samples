#!/usr/bin/env node

const fs = require("fs");

const buildAt = new Date().toISOString();
const buildEnv = process.env.ENVIRONMENT;

main();

function main() {
  const buildInfo = {
    buildEnv: buildEnv,
    buildAt: buildAt,
    commitSha: process.env.CODEBUILD_RESOLVED_SOURCE_VERSION,
    buildNumber: process.env.CODEBUILD_BUILD_NUMBER,
    headRef: process.env.CODEBUILD_WEBHOOK_HEAD_REF,
    trigger: process.env.CODEBUILD_WEBHOOK_TRIGGER,
  };

  console.log("buildInfo: ", buildInfo);

  fs.writeFileSync("build-info.json", JSON.stringify(buildInfo, null, 4));

  console.log(
    "AWS CodeBuild information has been generated and saved to build-info.json",
  );
}
