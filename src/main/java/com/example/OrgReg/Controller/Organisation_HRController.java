package com.example.OrgReg.Controller;

import com.example.OrgReg.Bean.Organisation_HR;
import com.example.OrgReg.DAO.Organisation_HRDAO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(originPatterns = "http://localhost:*")
@RequestMapping("/organisation_HR")
public class Organisation_HRController {
    @Autowired
    private Organisation_HRDAO orgDAO;

    @PostMapping("/add")
    public ResponseEntity<String> add_organisation_hr(@RequestBody Organisation_HR org_hr){
        orgDAO.save(org_hr);
        return ResponseEntity.ok("Success");
    }

    @GetMapping("/get")
    public ResponseEntity<List<Organisation_HR>> get_all_organisation(){
        List<Organisation_HR> orgs = orgDAO.findAll();
        return ResponseEntity.ok(orgs);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Organisation_HR> getOrganisationById(@PathVariable(name = "id") int id){
        Optional<Organisation_HR> organisationHr = orgDAO.findByOrganisationIDOrganisationID(id);
        return organisationHr.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    @DeleteMapping("/delete")
//    public ResponseEntity<String> delete(Organisation_HR orghr_id) {
//        orgDAO.delete(orghr_id);
//        return ResponseEntity.ok("Success");
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOrganisationHR(@PathVariable int id) {
        orgDAO.deleteById(id);
        return ResponseEntity.ok("Success");
    }

    @PutMapping("/update/{id}")
    public  Organisation_HR updateHR(@RequestBody Organisation_HR newOrghr, @PathVariable int id){
        Organisation_HR hr=orgDAO.findById(id);
        hr.setOrganisationHrFirstName(newOrghr.getOrganisationHrFirstName());
        hr.setOrganisationHrLastName(newOrghr.getOrganisationHrLastName());
        hr.setOrganisationHrContactNo(newOrghr.getOrganisationHrContactNo());
        hr.setOrganisationHrEmail(newOrghr.getOrganisationHrEmail());
        return orgDAO.save(hr);
        //return ResponseEntity.ok("Success");
    }
}