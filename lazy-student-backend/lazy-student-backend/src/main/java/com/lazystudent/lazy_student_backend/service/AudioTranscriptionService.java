package com.lazystudent.lazy_student_backend.service;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class AudioTranscriptionService {

    public String processFile(MultipartFile file) throws IOException, InterruptedException {
        String fileName = file.getOriginalFilename();
        String tempDir = System.getProperty("java.io.tmpdir");
        File tempFile = new File(tempDir + "/" + UUID.randomUUID() + "_" + fileName);

        try {
            file.transferTo(tempFile);


            if (fileName != null && fileName.toLowerCase().endsWith(".pdf")) {
                try (PDDocument document = PDDocument.load(tempFile)) {
                    PDFTextStripper pdfStripper = new PDFTextStripper();
                    return pdfStripper.getText(document);
                }
            }


            else if (fileName != null && fileName.matches(".*\\.(mp3|wav|m4a|mp4|mkv)$")) {

                ProcessBuilder processBuilder = new ProcessBuilder(
                        "whisper", tempFile.getAbsolutePath(),
                        "--model", "tiny",
                        "--output_dir", tempDir,
                        "--output_format", "txt"
                );
                processBuilder.redirectErrorStream(true);
                Process process = processBuilder.start();


                process.waitFor();


                File txtFile = new File(tempDir + "/" + tempFile.getName() + ".txt");
                if (txtFile.exists()) {
                    String transcribedText = new String(java.nio.file.Files.readAllBytes(txtFile.toPath()));
                    txtFile.delete();
                    return transcribedText;
                } else {
                    throw new RuntimeException("Failed to transcribe the audio/video file. Ensure Whisper and FFmpeg are installed.");
                }
            } else {
                return "Unsupported file format! Please upload a PDF, MP4, MP3, or WAV file.";
            }
        } finally {

            if (tempFile.exists()) {
                tempFile.delete();
            }
        }
    }
}