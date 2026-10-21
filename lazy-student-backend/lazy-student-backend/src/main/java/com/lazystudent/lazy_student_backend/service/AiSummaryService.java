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
                "Read the following lecture transcript.\n" +
                "1. First, provide a clear summary using bullet points.\n" +
                "2. Then, strictly print exactly this text: ---FLASHCARDS---\n" +
                "3. Finally, create 5 flashcards using exactly this format on new lines: Q: [Question] | A: [Answer]\n\n" +
                "Lecture Transcript:\n" + transcript;

        return chatModel.call(promptInstruction);
    }
}