package com.hms.care.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.hms.care.dao.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

	public List<com.hms.care.dao.Doctor> findByName(String name);

}
