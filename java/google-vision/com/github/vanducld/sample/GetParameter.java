package com.github.vanducld.sample;

import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.ssm.SsmClient;
import software.amazon.awssdk.services.ssm.model.GetParameterRequest;
import software.amazon.awssdk.services.ssm.model.GetParameterResponse;
import software.amazon.awssdk.services.ssm.model.SsmException;

/**
 * Before running this Java V2 code example, set up your development environment, including your credentials.
 * https://serverfault.com/questions/1008123/how-to-decrypt-secure-string-values-in-parameter-store-using-net-cores-amazons
 * For more information, see the following documentation topic:
 * <p>
 * https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/get-started.html
 */
public class GetParameter {
    private final static Region region = Region.AP_SOUTHEAST_1;
    private final static SsmClient ssmClient = SsmClient.builder()
            .region(region)
            .credentialsProvider(ProfileCredentialsProvider.create())
            .build();

    private static final String GOOGLE_KEY = getGoogleKey();

    static String getGoogleKey() {
        String paraName = "/lambda/upload-receipt/google-vision-api-key-secret";
        GetParameterRequest parameterRequest = GetParameterRequest.builder()
                .name(paraName)
                .withDecryption(true)
                .build();

        GetParameterResponse parameterResponse = ssmClient.getParameter(parameterRequest);
        ssmClient.close();
        return parameterResponse.parameter().value();

    }

    public static void main(String[] args) {

        final String usage = "\n" +
                "Usage:\n" +
                "    <paraName>\n\n" +
                "Where:\n" +
                "    paraName - The name of the parameter.\n";

//        if (args.length != 1) {
//            System.out.println(usage);
//            System.exit(1);
//        }

//        String paraName = args[0];
        String paraName = "/lambda/upload-receipt/google-vision-api-key-secret";
        Region region = Region.AP_SOUTHEAST_1;
        SsmClient ssmClient = SsmClient.builder()
                .region(region)
                .credentialsProvider(ProfileCredentialsProvider.create())
                .build();

        getParaValue(ssmClient, paraName);
        ssmClient.close();
        System.out.println("GOOGLE KEEEY: " + GOOGLE_KEY);
    }

    public static void getParaValue(SsmClient ssmClient, String paraName) {

        try {
            GetParameterRequest parameterRequest = GetParameterRequest.builder()
                    .name(paraName)
                    .withDecryption(true)
                    .build();

            GetParameterResponse parameterResponse = ssmClient.getParameter(parameterRequest);
            System.out.println("The parameter value is " + parameterResponse.parameter().value());

        } catch (SsmException e) {
            System.err.println(e.getMessage());
            System.exit(1);
        }
    }
}

