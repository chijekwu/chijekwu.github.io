package com.hmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hmt.exception.ResourceNotFoundException;
import com.hmt.model.Doctor;
import com.hmt.repository.DoctorRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class DoctorController {
	
	@Autowired
	private DoctorRepository doctorRepo;

	//get all doctors
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors(){
		return doctorRepo.findAll();
	}
	
	@GetMapping("/doctors/{id}")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable int id) {
		Doctor doc = doctorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));
		return ResponseEntity.ok(doc);
	}
	
	@GetMapping("/doctor/{name}")
	public List<Doctor> getDoctorByName(@PathVariable String name){
		//return doctorRepo.findByName(name);
		List<Doctor> doctors = doctorRepo.findByName(name);
		if(doctors.isEmpty()) {
			System.out.println(new ResourceNotFoundException("Doctor(s) with the name "+name + " not found"));
		}
		return doctorRepo.findByName(name);
	}
	
	@PostMapping("/addDoctor")
	public Doctor addDoctor(@PathVariable Doctor doctor){
		return doctorRepo.save(doctor);
	}
	
}
