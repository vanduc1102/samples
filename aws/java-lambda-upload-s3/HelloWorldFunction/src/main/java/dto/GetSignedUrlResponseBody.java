package dto;

public class GetSignedUrlResponseBody {
    private String url;

    public GetSignedUrlResponseBody(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
