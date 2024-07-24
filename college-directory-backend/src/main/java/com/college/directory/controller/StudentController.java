package com.college.directory.controller;

import com.college.directory.model.StudentProfile;
import com.college.directory.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<StudentProfile> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentProfile getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping
    public StudentProfile createStudent(@RequestBody StudentProfile studentProfile) {
        return studentService.createStudent(studentProfile);
    }

    @PutMapping("/{id}")
    public StudentProfile updateStudent(@PathVariable Long id, @RequestBody StudentProfile studentProfile) {
        return studentService.updateStudent(id, studentProfile);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}
