package com.lazystudent.lazy_student_backend.repository;

import com.lazystudent.lazy_student_backend.model.LectureSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LectureSummaryRepository extends JpaRepository<LectureSummary, Long> {

}