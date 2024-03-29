package com.vanducld.server;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.*;

public class BasicHttpServerExample {

    public static void main(String[] args) throws IOException {
        int port = 8500;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        HttpContext context = server.createContext("/ab");
        context.setHandler(BasicHttpServerExample::handleRequest);
        server.start();
        System.out.println("Server is ready at: "+ port);
    }

    private static void handleRequest(HttpExchange exchange) throws IOException {
        String response = "Java says hello: " + System.currentTimeMillis();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        exchange.sendResponseHeaders(200, response.getBytes().length);// response code and length
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}