package com.lazystudent.lazy_student_backend.controller;

import com.lazystudent.lazy_student_backend.dto.ApiResponse;
import com.lazystudent.lazy_student_backend.model.LectureSummary;
import com.lazystudent.lazy_student_backend.repository.LectureSummaryRepository;
import com.lazystudent.lazy_student_backend.service.AiSummaryService;
import com.lazystudent.lazy_student_backend.service.AudioTranscriptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping("/api/lectures")
public class LectureController {

    private final AiSummaryService aiSummaryService;
    private final AudioTranscriptionService audioTranscriptionService;
    private final LectureSummaryRepository repository;


    public LectureController(AiSummaryService aiSummaryService,
                             AudioTranscriptionService audioTranscriptionService,
                             LectureSummaryRepository repository) {
        this.aiSummaryService = aiSummaryService;
        this.audioTranscriptionService = audioTranscriptionService;
        this.repository = repository;
    }


    @PostMapping("/upload")
    public ResponseEntity<ApiResponse> uploadLecture(@RequestParam("file") MultipartFile file,
                                                     @RequestParam("title") String title) throws Exception {

        String transcript = audioTranscriptionService.transcribeAudio(file);
        String aiResult = aiSummaryService.generateSummaryAndFlashcards(transcript);

        LectureSummary summary = new LectureSummary();
        summary.setTitle(title);
        summary.setTranscript(transcript);
        summary.setSummary(aiResult);

        repository.save(summary);


        ApiResponse response = new ApiResponse("success", "Lecture successfully summarized!", summary);
        return ResponseEntity.ok(response);
    }


    @GetMapping
    public ResponseEntity<List<LectureSummary>> getAllSummaries() {
        List<LectureSummary> summaries = repository.findAll();
        return ResponseEntity.ok(summaries);
    }
}