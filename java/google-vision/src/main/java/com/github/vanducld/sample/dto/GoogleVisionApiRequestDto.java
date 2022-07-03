package com.github.vanducld.sample.dto;

import java.util.ArrayList;


public class GoogleVisionApiRequestDto {
    public ArrayList<Request> requests;
}

class Feature {
    public int maxResults;
    public String type;
}

class Image {
    public Source source;
}

class Request {
    public Image image;
    public ArrayList<Feature> features;
}

class Source {
    public String gcsImageUri;
}