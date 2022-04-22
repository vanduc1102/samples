package com.github.vanduc1102.uploadfile.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class GetSignedUrlResponseBody {
    private String url;
}
