package com.example.OrgReg.Bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name= "organisation")
@Data
public class Organisation {

    @Id
    @Column(name ="org_id",nullable = false,unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int organisationID;

    @Column(name="name",nullable = false)
    private String organisationName;

    @Column(name="org_address")
    private String organisationAddress;

    @OneToOne(mappedBy = "organisationID")
    @JsonIgnore
    private Organisation_HR organisation_HR;

    public Organisation_HR getOrganisation_HR() {
        return organisation_HR;
    }

    public void setOrganisation_HR(Organisation_HR organisation_HR) {
        this.organisation_HR = organisation_HR;
    }
}