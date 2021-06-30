package com.hms.care.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.care.dao.Doctor;
import com.hms.care.exception.ResourceNotFoundException;
import com.hms.care.repository.DoctorRepository;



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
	
	@GetMapping("/doctor/{id}")
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
	
	@PostMapping("/doctors")
	public Doctor addDoctor(@RequestBody Doctor doctor){
		return doctorRepo.save(doctor);
	}
	
	@PutMapping("/Doctor/{id}")
	public ResponseEntity<Doctor> updateDoctor(@PathVariable int id, @RequestBody Doctor doctor){
		Doctor doct = doctorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));
		doct.setName(doctor.getName());
		doct.setEmail(doctor.getEmail());
		doct.setNumberOfPatients(doctor.getNumberOfPatients());
		doct.setPractice(doctor.getPractice());
		doct.setTele(doctor.getTele());
		Doctor upDoctor = doctorRepo.save(doct);
		
		return ResponseEntity.ok(upDoctor);
	}
	
	/*public String deleteDoctor(@PathVariable int id) {
		doctorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));
		doctorRepo.deleteById(id);
		
		return "The doctor with ID: "+ id + " is no longer in the database.";
	}*/
	
	@DeleteMapping("/doctors/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDoctor(@PathVariable int id){
		Doctor doct = doctorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));
		
		doctorRepo.delete(doct);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
