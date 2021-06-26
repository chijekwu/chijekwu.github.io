package com.hmt.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name= "doctor")
public class Doctor {
	
	@Id
	@GeneratedValue
	private int d_id;
	
	private String name;
	private String practice;
	private int numberOfPatients;
	private String email;
	private int tele;
	
	
	/*
	 * public Doctor() { // TODO Auto-generated constructor stub } public Doctor(int
	 * d_id, String name, String practice, int numberOfPatients, String email, int
	 * tele) { super(); this.d_id = d_id; this.name = name; this.practice =
	 * practice; this.numberOfPatients = numberOfPatients; this.email = email;
	 * this.tele = tele; } public int getD_id() { return d_id; } public void
	 * setD_id(int d_id) { this.d_id = d_id; } public String getName() { return
	 * name; } public void setName(String name) { this.name = name; } public String
	 * getPractice() { return practice; } public void setPractice(String practice) {
	 * this.practice = practice; } public int getNumberOfPatients() { return
	 * numberOfPatients; } public void setNumberOfPatients(int numberOfPatients) {
	 * this.numberOfPatients = numberOfPatients; } public String getEmail() { return
	 * email; } public void setEmail(String email) { this.email = email; } public
	 * int getTele() { return tele; } public void setTele(int tele) { this.tele =
	 * tele; }
	 * 
	 * @Override public String toString() { return "Doctor [d_id=" + d_id +
	 * ", name=" + name + ", practice=" + practice + ", numberOfPatients=" +
	 * numberOfPatients + ", email=" + email + ", tele=" + tele + "]"; }
	 */
}
