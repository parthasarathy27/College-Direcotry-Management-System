package com.college.directory.service;

import com.college.directory.model.StudentProfile;
import com.college.directory.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<StudentProfile> getAllStudents() {
        return studentRepository.findAll();
    }

    public StudentProfile getStudentById(Long id) {
        Optional<StudentProfile> student = studentRepository.findById(id);
        return student.orElse(null);
    }

    public StudentProfile createStudent(StudentProfile studentProfile) {
        return studentRepository.save(studentProfile);
    }

    public StudentProfile updateStudent(Long id, StudentProfile studentProfile) {
        if (studentRepository.existsById(id)) {
            studentProfile.setId(id);
            return studentRepository.save(studentProfile);
        } else {
            return null;
        }
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
