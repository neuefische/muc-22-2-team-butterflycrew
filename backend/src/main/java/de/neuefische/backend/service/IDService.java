package de.neuefische.backend.service;

import java.util.UUID;

public class IDService {

    public String generateID(){
        return UUID.randomUUID().toString();
    }
}
