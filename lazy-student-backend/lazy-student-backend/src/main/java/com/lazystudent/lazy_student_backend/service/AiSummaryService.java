package com.lazystudent.lazy_student_backend.service;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Service;

@Service
public class AiSummaryService {

    private final ChatModel chatModel;


    public AiSummaryService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String generateSummaryAndFlashcards(String transcript) {

        String promptInstruction = "You are a helpful AI tutor for a university student. " +
                "Read the following lecture transcript. First, provide a clear summary using bullet points. " +
                "Then, create 5 flashcards (Question & Answer format) to help the student study.\n\n" +
                "Lecture Transcript:\n" + transcript;


        return chatModel.call(promptInstruction);
    }
}