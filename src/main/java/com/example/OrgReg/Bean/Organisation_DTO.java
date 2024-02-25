package com.example.OrgReg.Bean;

import jakarta.persistence.*;
import lombok.Data;

@Data
public class Organisation_DTO {
    private Organisation organisation;
    private Organisation_HR organisationHr;
}
