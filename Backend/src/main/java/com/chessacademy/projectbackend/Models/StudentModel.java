package com.chessacademy.projectbackend.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "students")
public class StudentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentId;
    private String studentFirstName;
    private String studentLastName;
    private String studentGender;
    private String studentFatherName;
    private String studentMotherName;
    private String studentemailId;
    private String studentDob;
    private String studentMobileNumber;
    private String studentAlternateNumber;
    private String studentCourseId;
    private String studentAddressLine1;
    private String studentAddressLine2;
    private String studentCity;
    private String studentState;
    private String studentPincode;
    private String studentNationality;

    public StudentModel(int studentId, String studentFirstName, String studentLastName, String studentGender,
            String studentFatherName, String studentMotherName, String studentemailId,
            String studentDob,
            String studentMobileNumber, String studentAlternateNumber, String studentCourseId,
            String studentAddressLine1, String studentAddressLine2, String studentCity,
            String studentState,
            String studentPincode, String studentNationality) {

        this.studentId = studentId;
        this.studentFirstName = studentFirstName;
        this.studentLastName = studentLastName;
        this.studentGender = studentGender;
        this.studentFatherName = studentFatherName;
        this.studentMotherName = studentMotherName;
        this.studentemailId = studentemailId;
        this.studentDob = studentDob;
        this.studentMobileNumber = studentMobileNumber;
        this.studentAlternateNumber = studentAlternateNumber;
        this.studentCourseId = studentCourseId;
        this.studentAddressLine1 = studentAddressLine1;
        this.studentAddressLine2 = studentAddressLine2;
        this.studentCity = studentCity;
        this.studentState = studentState;
        this.studentPincode = studentPincode;
        this.studentNationality = studentNationality;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentFirstName() {
        return studentFirstName;
    }

    public void setStudentFirstName(String studentFirstName) {
        this.studentFirstName = studentFirstName;
    }

    public String getStudentLastName() {
        return studentLastName;
    }

    public void setStudentLastName(String studentLastName) {
        this.studentLastName = studentLastName;
    }

    public String getStudentGender() {
        return studentGender;
    }

    public void setStudentGender(String studentGender) {
        this.studentGender = studentGender;
    }

    public String getStudentFatherName() {
        return studentFatherName;
    }

    public void setStudentFatherName(String studentFatherName) {
        this.studentFatherName = studentFatherName;
    }

    public String getStudentMotherName() {
        return studentMotherName;
    }

    public void setStudentMotherName(String studentMotherName) {
        this.studentMotherName = studentMotherName;
    }

    public String getStudentemailId() {
        return studentemailId;
    }

    public void setStudentemailId(String studentemailId) {
        this.studentemailId = studentemailId;
    }

    public String getStudentDob() {
        return studentDob;
    }

    public void setStudentDob(String studentDob) {
        this.studentDob = studentDob;
    }

    public String getStudentMobileNumber() {
        return studentMobileNumber;
    }

    public void setStudentMobileNumber(String studentMobileNumber) {
        this.studentMobileNumber = studentMobileNumber;
    }

    public String getStudentAlternateNumber() {
        return studentAlternateNumber;
    }

    public void setStudentAlternateNumber(String studentAlternateNumber) {
        this.studentAlternateNumber = studentAlternateNumber;
    }

    public String getStudentCourseId() {
        return studentCourseId;
    }

    public void setStudentCourseId(String studentCourseId) {
        this.studentCourseId = studentCourseId;
    }

    public String getStudentAddressLine1() {
        return studentAddressLine1;
    }

    public void setStudentAddressLine1(String studentAddressLine1) {
        this.studentAddressLine1 = studentAddressLine1;
    }

    public String getStudentAddressLine2() {
        return studentAddressLine2;
    }

    public void setStudentAddressLine2(String studentAddressLine2) {
        this.studentAddressLine2 = studentAddressLine2;
    }

    public String getStudentCity() {
        return studentCity;
    }

    public void setStudentCity(String studentCity) {
        this.studentCity = studentCity;
    }

    public String getStudentState() {
        return studentState;
    }

    public void setStudentState(String studentState) {
        this.studentState = studentState;
    }

    public String getStudentPincode() {
        return studentPincode;
    }

    public void setStudentPincode(String studentPincode) {
        this.studentPincode = studentPincode;
    }

    public String getStudentNationality() {
        return studentNationality;
    }

    public void setStudentNationality(String studentNationality) {
        this.studentNationality = studentNationality;
    }

    public StudentModel() {
        super();
    }

}