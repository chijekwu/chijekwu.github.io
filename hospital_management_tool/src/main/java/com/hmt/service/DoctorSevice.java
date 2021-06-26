package com.hmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hmt.model.Doctor;
import com.hmt.repository.DoctorRepository;

@Service
public class DoctorSevice {

	@Autowired
	private DoctorRepository doctorRepository;
	
	public Doctor addDoctor(Doctor doctor) {
		return doctorRepository.save(doctor);
	}
	
	public List<Doctor> addDoctors(List<Doctor> doctors){
		return doctorRepository.saveAll(doctors);
	}
	
	public Doctor getDoctorById(int id) {
		return doctorRepository.findById(id).orElse(null);
	}
	
	public List<Doctor> getAllDoctors(){
		return doctorRepository.findAll();
	}
	
	
}
