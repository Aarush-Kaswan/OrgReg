package com.example.OrgReg.DAO;


import com.example.OrgReg.Bean.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrganisationDAO extends JpaRepository<Organisation, Integer> {

}