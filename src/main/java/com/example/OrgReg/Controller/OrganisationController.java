package com.example.OrgReg.Controller;

import com.example.OrgReg.Bean.Organisation;
import com.example.OrgReg.Bean.Organisation_DTO;
import com.example.OrgReg.Bean.Organisation_HR;
import com.example.OrgReg.DAO.OrganisationDAO;
import com.example.OrgReg.DAO.Organisation_HRDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "http://localhost:*")
@RestController
@RequestMapping("/organisation")
public class OrganisationController {

    @Autowired
    private OrganisationDAO orgDAO;
    @Autowired
    private Organisation_HRDAO organisationHrDao;

    @PostMapping("/add")
    public ResponseEntity<String> add_organisation(@RequestBody Organisation_DTO org){
        Organisation organisation = orgDAO.save(org.getOrganisation());
        Organisation_HR organisationHr = org.getOrganisationHr();
        organisationHr.setOrganisationID(organisation);
        organisationHrDao.save(organisationHr);
        return ResponseEntity.ok("Success");
    }

    @GetMapping("/get")
    public ResponseEntity<List<Organisation>> get_all_organisation(){
        List<Organisation> orgs = orgDAO.findAll();
        return ResponseEntity.ok(orgs);
    }
    @GetMapping("/get/{organisationID}")
    public ResponseEntity<Organisation> getOrganisationById(@PathVariable int organisationID){
        //Organisation org=
        return ResponseEntity.ok(orgDAO.findById(organisationID).orElse(null));
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestBody Organisation organisation) {
        organisationHrDao.delete(orgDAO.findById(organisation.getOrganisationID()).get().getOrganisation_HR());
        return ResponseEntity.ok("Success");
    }

    @PutMapping("/update/{organisationID}")
    public ResponseEntity<Organisation> update_organisation(Organisation org){
        return ResponseEntity.ok(orgDAO.save(org));
    }

}