package com.company.samplerestapi.Controller;

import com.company.samplerestapi.Services.Student;
import com.company.samplerestapi.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;
    @RequestMapping("/students")
    public List<Student> getAllstudents()
    {
        return studentService.getAllStudents();

    }
}
