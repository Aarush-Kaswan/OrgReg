package com.example.OrgReg.Bean;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name= "employee")
@Data
public class Employee {
    @Id
    @Column(name ="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeID;

    @Column(name="username")
    private String employeeUserName;

    @Column(name="password")
    private String employeePass;
}
