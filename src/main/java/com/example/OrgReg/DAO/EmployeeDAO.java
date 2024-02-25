package com.example.OrgReg.DAO;

import com.example.OrgReg.Bean.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeDAO extends JpaRepository<Employee, Integer> {
    Optional<Employee> findByEmployeeUserNameAndEmployeePass(String username, String pass);
}
