// ./pothos.config.js

/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: "./backend/graphql/__generated__/inputs.ts",
  },
  crud: {
    outputDir: "./backend/graphql/__generated__/",
    inputsImporter: `import * as Inputs from '@/backend/graphql/__generated__/inputs';`,
    resolversImports: `import { prisma } from '@/backend/lib/prisma';`,
    prismaCaller: "prisma",
  },
  global: {
    builderLocation: "./backend/graphql/builder",
    replacer: (str, section) => {
    console.log({str, section});
      if (section === "crud.model.resolver") {
        // return str.replace(
        //   "import * as Inputs from '../inputs'",
        //   "import * as Inputs from '../../inputs';"
        // );
      }
      return str;
    },
  },
};
