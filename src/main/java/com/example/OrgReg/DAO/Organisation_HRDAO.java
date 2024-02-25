package com.example.OrgReg.DAO;

import com.example.OrgReg.Bean.Organisation_HR;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface Organisation_HRDAO extends JpaRepository<Organisation_HR, Integer> {

    Optional<Organisation_HR> findByOrganisationIDOrganisationID(int id);

    Organisation_HR findById(int id);
}