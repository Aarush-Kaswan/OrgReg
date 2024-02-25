package com.example.OrgReg.Bean;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name= "organisation_HR")
@Data
public class Organisation_HR {

    @Id
    @Column(name ="orghr_id",nullable = false,unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int organisationHRID;

    @Column(name="orghr_first_name",nullable = false)
    private String organisationHrFirstName;

    @Column(name="orghr_last_name")
    private String organisationHrLastName;

    @Column(name="orghr_email", unique=true, nullable = false)
    private String organisationHrEmail;

    @Column(name="orghr_contact_number")
    private String organisationHrContactNo;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="org_id")
    private Organisation organisationID;

    public int getOrganisationHRID() {
        return organisationHRID;
    }

    public void setOrganisationHRID(int organisationHRID) {
        this.organisationHRID = organisationHRID;
    }

    public String getOrganisationHrFirstName() {
        return organisationHrFirstName;
    }

    public void setOrganisationHrFirstName(String organisationHrFirstName) {
        this.organisationHrFirstName = organisationHrFirstName;
    }

    public String getOrganisationHrLastName() {
        return organisationHrLastName;
    }

    public void setOrganisationHrLastName(String organisationHrLastName) {
        this.organisationHrLastName = organisationHrLastName;
    }

    public String getOrganisationHrEmail() {
        return organisationHrEmail;
    }

    public void setOrganisationHrEmail(String organisationHrEmail) {
        this.organisationHrEmail = organisationHrEmail;
    }

    public String getOrganisationHrContactNo() {
        return organisationHrContactNo;
    }

    public void setOrganisationHrContactNo(String organisationHrContactNo) {
        this.organisationHrContactNo = organisationHrContactNo;
    }

    public Organisation getOrganisationID() {
        return organisationID;
    }

    public void setOrganisationID(Organisation organisationID) {
        this.organisationID = organisationID;
    }
}