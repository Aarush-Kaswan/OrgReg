package com.example.OrgReg;

import com.example.OrgReg.Bean.Employee;
import com.example.OrgReg.DAO.EmployeeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeDAO employeeDAO;

    public Employee login(Employee emp) {
            String employee_UserName = emp.getEmployeeUserName();
            String employee_Password = emp.getEmployeePass();

            Optional<Employee> employee = employeeDAO.findByEmployeeUserNameAndEmployeePass(employee_UserName, employee_Password);

            // If no valid Employee found, return null so that login failure is understood
            if (employee.isEmpty())
                return null;
            else
                return employee.get();

    }

    public Employee addEmployee(Employee emp) {
        return employeeDAO.save(emp);
    }
}
