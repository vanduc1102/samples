package com.github.vanduc1102.sendnofitication;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.val;
import software.amazon.awssdk.core.SdkBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.rekognition.RekognitionClient;
import software.amazon.awssdk.services.rekognition.model.*;
import software.amazon.awssdk.services.textract.TextractClient;
import software.amazon.awssdk.services.textract.model.*;
import software.amazon.awssdk.services.textract.model.S3Object;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class RekognitionPlay {
    static Gson gson = new GsonBuilder().setPrettyPrinting().create();
    static Region region = Region.AP_SOUTHEAST_1;
    static String sourceImage = "/Users/duc.nguyen/Downloads/Offline-Receipts/IMG_20220506_154920_822.jpg";
    // https://test-notification-7850839815.s3.ap-southeast-1.amazonaws.com/IMG_20220506_154920_822.jpg
    static String bucketName = "test-notification-7850839815";
    static String docName="IMG_20220506_154920_822.jpg";

    public static void main(String[] args) {

        RekognitionClient rekClient = RekognitionClient.builder()
            .region(region)
            .build();

        System.out.println("AWS Rekognition " + sourceImage);
        System.out.println("Locating celebrities in " + sourceImage);
//        recognizeAllCelebrities(rekClient, sourceImage);
//        detectTextLabels(rekClient, sourceImage);
        rekClient.close();

        System.out.println("AWS Textract  " + sourceImage);
        TextractClient textractClient = TextractClient.builder()
            .region(region)
            .build();

        String jobId = startDocAnalysisS3 (textractClient, bucketName, docName);
        System.out.println("Getting results for job "+jobId);
        String status = getJobResults(textractClient, jobId);
        System.out.println("The job status is "+status);

        textractClient.close();

    }

    public static void recognizeAllCelebrities(RekognitionClient rekClient, String sourceImage) {

        try {

            InputStream sourceStream = new FileInputStream(sourceImage);
            SdkBytes sourceBytes = SdkBytes.fromInputStream(sourceStream);

            Image souImage = Image.builder()
                .bytes(sourceBytes)
                .build();

            RecognizeCelebritiesRequest request = RecognizeCelebritiesRequest.builder()
                .image(souImage)
                .build();

            RecognizeCelebritiesResponse result = rekClient.recognizeCelebrities(request) ;

            List<Celebrity> celebs=result.celebrityFaces();
            System.out.println(celebs.size() + " celebrity(s) were recognized.\n");

            for (Celebrity celebrity: celebs) {
                System.out.println("Celebrity recognized: " + celebrity.name());
                System.out.println("Celebrity ID: " + celebrity.id());

                System.out.println("Further information (if available):");
                for (String url: celebrity.urls()){
                    System.out.println(url);
                }
                System.out.println();
            }
            System.out.println(result.unrecognizedFaces().size() + " face(s) were unrecognized.");

        } catch (RekognitionException | FileNotFoundException e) {
            System.out.println(e.getMessage());
            System.exit(1);
        }
    }

    public static void detectTextLabels(RekognitionClient rekClient, String sourceImage) {

        try {

            InputStream sourceStream = new FileInputStream(sourceImage);
            SdkBytes sourceBytes = SdkBytes.fromInputStream(sourceStream);

            // Create an Image object for the source image
            Image souImage = Image.builder()
                .bytes(sourceBytes)
                .build();

            DetectTextRequest textRequest = DetectTextRequest.builder()
                .image(souImage)
                .build();

            DetectTextResponse textResponse = rekClient.detectText(textRequest);
            List<TextDetection> textCollection = textResponse.textDetections();

            System.out.println("Detected lines and words");
            for (TextDetection text: textCollection) {
                System.out.println("Detected: " + text.detectedText());
                System.out.println("Confidence: " + text.confidence().toString());
                System.out.println("Id : " + text.id());
                System.out.println("Parent Id: " + text.parentId());
                System.out.println("Type: " + text.type());
                System.out.println();
            }

        } catch (RekognitionException | FileNotFoundException e) {
            System.out.println(e.getMessage());
            System.exit(1);
        }
    }
    public static String startDocAnalysisS3 (TextractClient textractClient, String bucketName, String docName) {

        try {

//            List<FeatureType> myList = new ArrayList<FeatureType>();
//            myList.add(FeatureType.TABLES);
//            myList.add(FeatureType.FORMS);

            S3Object s3Object = S3Object.builder()
                .bucket(bucketName)
                .name(docName)
                .build();

            DocumentLocation location = DocumentLocation.builder()
                .s3Object(s3Object)
                .build();

            StartExpenseAnalysisRequest documentAnalysisRequest = StartExpenseAnalysisRequest.builder()
                .documentLocation(location)
                .build();

            StartExpenseAnalysisResponse response = textractClient.startExpenseAnalysis(documentAnalysisRequest);

            // Get the job ID
            String jobId = response.jobId();
            return jobId;

        } catch (TextractException e) {

            System.err.println(e.getMessage());
            System.exit(1);
        }
        return "" ;
    }

    private static String getJobResults(TextractClient textractClient, String jobId) {

        boolean finished = false;
        int index = 0 ;
        String status = "" ;

        try {
            while (!finished) {
                GetExpenseAnalysisRequest analysisRequest = GetExpenseAnalysisRequest.builder()
                    .jobId(jobId)
                    .maxResults(1000)
                    .build();

                GetExpenseAnalysisResponse response = textractClient.getExpenseAnalysis(analysisRequest);
                status = response.jobStatus().toString();

                if (status.compareTo("SUCCEEDED") == 0){
                    finished = true;
                    System.out.println("response.hasExpenseDocuments(): "+response.hasExpenseDocuments());
                    String asPrettyJSon = gson.toJson(response.expenseDocuments());
                    System.out.println(asPrettyJSon);
                }
                else {
                    System.out.println(index + " status is: " + status);
                    Thread.sleep(1000);
                }
                index++ ;
            }
            return status;

        } catch( InterruptedException e) {
            System.out.println(e.getMessage());
            System.exit(1);
        }
        return "";
    }
}
