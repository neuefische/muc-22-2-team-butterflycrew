package de.neuefische.backend.models;

public record MovieExchangeDTO(

        String title,
        String status, //search or offer
        String description,
        String condition,
        double price
) {
}
