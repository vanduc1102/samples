package com.github.vanducld.sample.dto;
import java.util.ArrayList;


public class GoogleVisionApiResponseDto{
    public ArrayList<AnnotateImageResponseDto> responses;
}

class LabelAnnotationDto{
    public String mid;
    public String description;
    public double score;
    public double topicality;
}

class AnnotateImageResponseDto{
    public ArrayList<LabelAnnotationDto> labelAnnotations;
}
