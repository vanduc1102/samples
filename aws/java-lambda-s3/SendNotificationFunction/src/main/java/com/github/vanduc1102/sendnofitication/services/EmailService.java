package com.github.vanduc1102.sendnofitication.services;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.ses.SesClient;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeBodyPart;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Properties;
import software.amazon.awssdk.core.SdkBytes;
import software.amazon.awssdk.http.SdkHttpClient;
import software.amazon.awssdk.http.apache.ApacheHttpClient;
import software.amazon.awssdk.services.ses.model.SendRawEmailRequest;
import software.amazon.awssdk.services.ses.model.RawMessage;

public class EmailService {
    private final Region REGION = Region.of(System.getenv("AWS_REGION"));
    private final String SENDER = System.getenv("NOTIFICATION_SENDER");
    private final String RECEIVER = System.getenv("NOTIFICATION_RECEIVER");

    private final String SUBJECT = "Offline Receipt - User %s just uploaded a new receipt";

    private final String HTML_BODY = "<div>User Id: <strong>%s</strong></div><br />"
            + "<div>Store Name: <strong>%s</strong></div><br />"
            + "<div>Amount: <strong>%s</strong></div><br />"
            + "<div>Receipt URL: <strong>%s</strong></div><br />"
            + "<div><a href='%s'><strong>Direct Link</strong></a>&nbsp;(valid for 7 days)</div>";

    private final String TEXT_BODY = "User Id: %s"
            + "\nStore Name: %s"
            + "\nAmount: %s"
            + "\nReceipt URL: %s"
            + "\nDirect Link (valid for 7 days): %s";

    public void sendUploadNotification(String userId, String store, String amount, String objectUrl,
            String preSignedUrl) throws AddressException, MessagingException, IOException {
        this.send(
                SENDER,
                RECEIVER,
                String.format(SUBJECT, userId),
                String.format(TEXT_BODY, userId, store, amount, objectUrl, preSignedUrl),
                String.format(HTML_BODY, userId, store, amount, objectUrl, preSignedUrl));
    }

    private void send(
            String sender,
            String recipient,
            String subject,
            String bodyText,
            String bodyHTML) throws AddressException, MessagingException, IOException {

        SdkHttpClient httpClient = ApacheHttpClient.builder().build();
        SesClient client = SesClient.builder()
                .region(REGION)
                .httpClient(httpClient)
                .build();

        Session session = Session.getDefaultInstance(new Properties());
        MimeMessage message = new MimeMessage(session);

        message.setSubject(subject, "UTF-8");
        message.setFrom(new InternetAddress(sender));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));

        MimeMultipart msgBody = new MimeMultipart("alternative");

        MimeBodyPart wrap = new MimeBodyPart();

        MimeBodyPart textPart = new MimeBodyPart();
        textPart.setContent(bodyText, "text/plain; charset=UTF-8");

        MimeBodyPart htmlPart = new MimeBodyPart();
        htmlPart.setContent(bodyHTML, "text/html; charset=UTF-8");

        msgBody.addBodyPart(textPart);
        msgBody.addBodyPart(htmlPart);

        wrap.setContent(msgBody);

        MimeMultipart msg = new MimeMultipart("mixed");

        message.setContent(msg);

        msg.addBodyPart(wrap);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        message.writeTo(outputStream);
        ByteBuffer buf = ByteBuffer.wrap(outputStream.toByteArray());

        byte[] arr = new byte[buf.remaining()];
        buf.get(arr);

        SdkBytes data = SdkBytes.fromByteArray(arr);
        RawMessage rawMessage = RawMessage.builder()
                .data(data)
                .build();

        SendRawEmailRequest rawEmailRequest = SendRawEmailRequest.builder()
                .rawMessage(rawMessage)
                .build();

        client.sendRawEmail(rawEmailRequest);
    }
}
