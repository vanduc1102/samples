import axios from "axios";

interface VerifyContractRequest {
  address: string;
  sourceCode: any;
  name: string;
  compilerversion: string;
  licenseType: string;
}

interface EtherScanResponse {
  data: {
    message: string;
    result: string;
    status: string;
  };
}

const API_ENDPOINTS: Record<string, string> = {
  "1": "//api.etherscan.io/",
  "3": "//api-ropsten.etherscan.io/api",
  "4": "//api-rinkeby.etherscan.io/api",
  "5": "//api-goerli.etherscan.io/api",
  "42": "//api-kovan.etherscan.io/api",
};

export async function verifyAndPublicContractSourceCode(
  apiKey: string,
  chainId: string,
  requestBody: VerifyContractRequest
) {
  const bodyFormData = new FormData();
  bodyFormData.append("apiKey", apiKey);
  bodyFormData.append("module", "contract");
  bodyFormData.append("action", "verifysourcecode");
  bodyFormData.append("contractaddress", requestBody.address);
  bodyFormData.append("sourceCode", requestBody.sourceCode);
  bodyFormData.append("codeformat", "solidity-standard-json-input");
  bodyFormData.append("contractname", requestBody.name);
  bodyFormData.append("compilerversion", requestBody.compilerversion);
  bodyFormData.append("optimizationUsed", "0");
  bodyFormData.append("runs", "200");
  bodyFormData.append("licenseType", requestBody.licenseType);

  return axios.post<any, EtherScanResponse>(
    API_ENDPOINTS[chainId],
    bodyFormData
  );
}

export async function codeVerificationStatus(
  apiKey: string,
  chainId: string,
  txHash: string
) {
  const bodyFormData = new FormData();
  bodyFormData.append("apiKey", apiKey);
  bodyFormData.append("guid", txHash);
  bodyFormData.append("module", "contract");
  bodyFormData.append("action", "checkverifystatus");

  return axios.post<any, EtherScanResponse>(
    API_ENDPOINTS[chainId],
    bodyFormData
  );
}
