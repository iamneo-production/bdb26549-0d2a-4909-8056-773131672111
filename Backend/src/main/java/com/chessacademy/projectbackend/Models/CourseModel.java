package com.chessacademy.projectbackend.Models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "courses")
public class CourseModel {

	@Id
	private Long courseId;
	private String courseName;
	private String courseDescription;
	private int courseDuration;
	private int noOfStudents;
	private String courseTiming;

	public CourseModel(long courseId, String courseName, String courseDescription, int courseDuration, int noOfStudents,
			String courseTiming) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDescription = courseDescription;
		this.courseDuration = courseDuration;
		this.noOfStudents = noOfStudents;
		this.courseTiming = courseTiming;

	}
	//getter and setter
	public CourseModel() {
		super();
		// default
	}

	public long getCourseId() {
		return courseId;
	}

	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public int getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}

	public int getNoOfStudents() {
		return noOfStudents;
	}

	public void setNoOfStudents(int noOfStudents) {
		this.noOfStudents = noOfStudents;
	}

	public String getCourseTiming() {
		return courseTiming;
	}

	public void setCourseTiming(String courseTiming) {
		this.courseTiming = courseTiming;
	}

	@Override
	public String toString() {
		return "Course{" +
				"courseId=" + courseId +
				", courseName='" + courseName + '\'' +
				", courseDescription='" + courseDescription + '\'' +
				", courseDuration=" + courseDuration +
				", noOfStudents=" + noOfStudents +
				", courseName='" + courseName + '\'' +
				'\'' +
				'}';
	}
}
