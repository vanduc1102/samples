package com.github.vanducld.sample;

import com.google.protobuf.ByteString;

import java.io.FileInputStream;

import static com.github.vanducld.sample.GoogleVisionClient.getReceiptScore;
import static com.github.vanducld.sample.GoogleVisionClient.getReceiptScoreViaRest;

public class Main {


    public static void main(String... args) throws Exception {
        // FILE base64 --> ENV:

        // Initialize client that will be used to send requests. This client only needs to be created
        // once, and can be reused for multiple requests. After completing all of your requests, call
        // the "close" method on the client to safely clean up any remaining background resources
        // The path to the image file to annotate
        String filePath = "/Users/duc.nguyen/Downloads/Offline-Receipts/srunding-authentic-indonesian.jpeg";
//        String filePath = "/Users/duc.nguyen/Pictures/background-green/doan-tuan-3QFQOxGCVmE-unsplash.jpeg";
        byte[] imgBytes = (new FileInputStream(filePath)).readAllBytes();
//        ByteString imgBytes = ByteString.copyFrom(GetObjectS3.getDefaultFileFromS3());
        float receiptScore = getReceiptScoreViaRest(imgBytes);
        System.out.println(System.nanoTime() + " - Score: " + receiptScore);
    }
}
