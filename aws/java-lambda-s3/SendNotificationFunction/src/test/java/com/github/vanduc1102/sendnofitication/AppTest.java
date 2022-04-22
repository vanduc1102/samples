package com.github.vanduc1102.sendnofitication;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;

import java.io.IOException;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.lambda.runtime.tests.EventLoader;
import com.github.vanduc1102.sendnofitication.services.EmailService;
import com.github.vanduc1102.sendnofitication.services.S3Service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class AppTest {

    S3Service mockS3Service;
    EmailService emailService;
    App app;

    @BeforeEach
    void setup() {
        this.mockS3Service = Mockito.mock(S3Service.class);
        this.emailService = Mockito.mock(EmailService.class);
        this.app = new App(this.emailService, this.mockS3Service);
    }

    @Test
    public void successfulResponse() {

        S3Event s3Event = EventLoader.loadS3Event("s3-event.json");

        APIGatewayProxyResponseEvent result = this.app.handleRequest(s3Event, null);
        assertEquals(200, result.getStatusCode().intValue());
        assertEquals("application/json", result.getHeaders().get("Content-Type"));
        String content = result.getBody();
        assertNotNull(content);
    }

    @Test
    public void errorWhenSendingEmail() throws AddressException, MessagingException, IOException {

        S3Event s3Event = EventLoader.loadS3Event("s3-event.json");
        doThrow(new MessagingException("Can not send message")).when(this.emailService)
                .sendUploadNotification(any(), any(), any(), any(), any());

        APIGatewayProxyResponseEvent result = this.app.handleRequest(s3Event, null);
        assertEquals(500, result.getStatusCode().intValue());
        assertEquals("application/json", result.getHeaders().get("Content-Type"));
        String content = result.getBody();
        assertNotNull(content);
        assertTrue(content.contains("Can not send message"));
    }
}
