package com.github.vanduc1102.uploadfile.dto;

import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class GetSignedUrlRequestBody {
    private String fileName;
    private String fileType;
    private String userId;
    private String amount;
    private String store;
    private Long contentLength;
}
