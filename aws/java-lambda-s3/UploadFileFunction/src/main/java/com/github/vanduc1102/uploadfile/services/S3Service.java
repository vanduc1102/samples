package com.github.vanduc1102.uploadfile.services;

import java.time.Duration;
import java.util.HashMap;

import com.github.vanduc1102.uploadfile.dto.GetSignedUrlRequestBody;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

public class S3Service {
    private final String UPLOAD_BUCKET = System.getenv("UPLOAD_BUCKET");
    private final Region REGION = Region.of(System.getenv("AWS_REGION"));
    public String getPreSignedUrl(GetSignedUrlRequestBody object) {
        S3Presigner preSigner = S3Presigner.builder()
                .region(REGION)
                .build();

        PutObjectRequest objectRequest = PutObjectRequest.builder()
                .bucket(UPLOAD_BUCKET)
                .key(object.getFileName())
                .contentType(object.getFileType())
                .contentLength(object.getContentLength())
                .metadata(new HashMap<>() {
                    {
                        put("userId", object.getUserId());
                        put("amount", object.getAmount());
                        put("store", object.getStore());
                    }
                })
                .build();

        PutObjectPresignRequest preSignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(15))
                .putObjectRequest(objectRequest)
                .build();

        PresignedPutObjectRequest preSignedRequest = preSigner.presignPutObject(preSignRequest);
        return preSignedRequest.url().toString();
    }
}
