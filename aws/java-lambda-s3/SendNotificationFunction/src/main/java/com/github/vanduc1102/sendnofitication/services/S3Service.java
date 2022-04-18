package com.github.vanduc1102.sendnofitication.services;

import java.net.URL;
import java.time.Duration;
import java.util.Map;


import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;
import software.amazon.awssdk.services.s3.model.HeadObjectRequest;
import software.amazon.awssdk.services.s3.model.HeadObjectResponse;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;

public class S3Service {
    private final Region REGION = Region.of(System.getenv("AWS_REGION"));
    private final S3Presigner preSigner = S3Presigner.builder()
            .region(REGION)
            .build();
    private final S3Client s3Client = S3Client.builder()
            .region(REGION)
            .build();

    public String getPresignedUrl(String bucketName, String keyName) {
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(keyName)
                .build();

        GetObjectPresignRequest getObjectPresignRequest = GetObjectPresignRequest.builder()
                .signatureDuration(Duration.ofDays(7))
                .getObjectRequest(getObjectRequest)
                .build();

        PresignedGetObjectRequest presignedGetObjectRequest = preSigner.presignGetObject(getObjectPresignRequest);

        return presignedGetObjectRequest.url().toString();
    }

    public Map<String, String> getObjectMeta(String bucketName, String keyName) {
        HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                .bucket(bucketName)
                .key(keyName)
                .build();
        HeadObjectResponse headObjectResponse = s3Client.headObject(headObjectRequest);
        return headObjectResponse.metadata();
    }

    public String getURL(String bucketName, String keyName) {
        GetUrlRequest request = GetUrlRequest.builder()
                .bucket(bucketName)
                .key(keyName)
                .build();

        URL url = s3Client.utilities().getUrl(request);

        return url.toString();
    }
}
