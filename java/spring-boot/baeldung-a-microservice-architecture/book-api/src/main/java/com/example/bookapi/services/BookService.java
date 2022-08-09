package com.example.bookapi.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.bookapi.dtos.Book;

@Service
public class BookService {

    public List<Book> findAllBook() {
        return Collections.<Book>emptyList();
    }

    public Book findBookById(Long bookId) {
        return null;
    }

    public Book createBook(Book book) {
        return null;
    }

    public void deleteBook(Long bookId) {
    }

    public Book updateBook(Book book, Long bookId) {
        return null;
    }

    public Book updateBook(Map<String, String> updates, Long bookId) {
        return null;
    }

}
