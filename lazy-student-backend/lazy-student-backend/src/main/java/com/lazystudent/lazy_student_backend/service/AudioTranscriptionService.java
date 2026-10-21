package com.lazystudent.lazy_student_backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class AudioTranscriptionService {

    public String transcribeAudio(MultipartFile file) throws IOException, InterruptedException {
        String tempDir = System.getProperty("java.io.tmpdir");
        File tempFile = new File(tempDir + "/" + UUID.randomUUID() + "_" + file.getOriginalFilename());

        try {

            file.transferTo(tempFile);


            return "This is the transcribed text from the uploaded audio file. The lecture discussed Artificial Intelligence and its applications.";

        } finally {

            if (tempFile.exists()) {
                tempFile.delete();
            }
        }
    }
}
