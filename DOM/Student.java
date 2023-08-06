package com.company.samplerestapi.Services;

public class Student {
    private  int rno; private  String name; private String stream; private String dept;

    public Student(int rno, String name, String stream, String dept) {
        this.rno = rno;
        this.name = name;
        this.stream = stream;
        this.dept = dept;
    }

    public int getRno() {
        return rno;
    }

    public void setRno(int rno) {
        this.rno = rno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }
}

