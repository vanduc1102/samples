package com.github.vanducld.sample;

import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;

import java.io.IOException;


// snippet-start:[s3.java2.getobjectdata.import]

import java.nio.file.Files;
import java.nio.file.Path;
// snippet-end:[s3.java2.getobjectdata.import]

/**
 * Before running this Java V2 code example, set up your development environment, including your credentials.
 * <p>
 * For more information, see the following documentation topic:
 * <p>
 * https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/get-started.html
 */

public class GetObjectS3 {
    private static Region region = Region.AP_SOUTHEAST_1;
    private static S3Client s3Client = S3Client.builder()
            .region(region)
            .credentialsProvider(ProfileCredentialsProvider.create())
            .build();


    public static void main(String[] args) throws IOException {

        final String usage = "\n" +
                "Usage:\n" +
                "    <bucketName> <keyName> <path>\n\n" +
                "Where:\n" +
                "    bucketName - The Amazon S3 bucket name. \n\n" +
                "    keyName - The key name. \n\n" +
                "    path - The path where the file is written to. \n\n";

//        if (args.length != 3) {
//            System.out.println(usage);
//            System.exit(1);
//        }

        String bucketName = "receipt-listing-2022-04-18-17-48-ap-southeast-1";
        String keyName = "1ccf674e-d8be-425a-a5f4-c5401aad8ff1";
        String path = "/Users/duc.nguyen/Downloads/" + System.currentTimeMillis() + "-" + keyName + ".png";


        byte[] data = getObjectBytes(bucketName, keyName);
        Path writtenFile = Files.write(Path.of(path), data);
        System.out.println(writtenFile.toString());
    }

    public static byte[] getDefaultFileFromS3(){
        String bucketName = "receipt-listing-2022-04-18-17-48-ap-southeast-1";
        String keyName = "1ccf674e-d8be-425a-a5f4-c5401aad8ff1";

        byte[] data = getObjectBytes(bucketName, keyName);
        return data;
    }

    // snippet-start:[s3.java2.getobjectdata.main]
    public static byte[] getObjectBytes(String bucketName, String keyName) {
        try {
            GetObjectRequest objectRequest = GetObjectRequest
                    .builder()
                    .key(keyName)
                    .bucket(bucketName)
                    .build();

            ResponseBytes<GetObjectResponse> objectBytes = s3Client.getObjectAsBytes(objectRequest);
            byte[] data = objectBytes.asByteArray();

            return data;

        } catch (Exception error) {
            throw new RuntimeException(error);
        }
    }
    // snippet-end:[s3.java2.getobjectdata.main]
}