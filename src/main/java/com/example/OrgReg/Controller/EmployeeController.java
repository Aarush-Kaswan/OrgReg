package com.example.OrgReg.Controller;

import com.example.OrgReg.Bean.Employee;
import com.example.OrgReg.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
@CrossOrigin(originPatterns = "http://localhost:*")
public class EmployeeController {
    @Autowired private EmployeeService employeeService;

    @PostMapping("/login")
    public ResponseEntity<Employee> login(@RequestBody Employee emp) {
        Employee loggedInEmployee = employeeService.login(emp);

        if (loggedInEmployee == null)
            return ResponseEntity.status(401).build();
        else
            return ResponseEntity.ok(loggedInEmployee);
    }

    @PostMapping("/add")
    public ResponseEntity<String> add_employee(Employee emp){
        employeeService.addEmployee(emp);
        return ResponseEntity.ok("Success");
    }

}
