package com.company.samplerestapi.Services;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
@Service
public class StudentService {
    List<Student> students = Arrays.asList(
            new Student(01, "Vishal", "B.Tech","CSE"),
            new Student(02, "Rajat", "B.Tech","CSE"),
            new Student(03, "Ayush", "B.Tech","CSE"),
            new Student(04, "Uday", "B.Tech","CSE"),
            new Student(05, "Aana", "B.Tech","CSE")
    );

     public List<Student> getAllStudents()
     {
         return students;
    }
}
