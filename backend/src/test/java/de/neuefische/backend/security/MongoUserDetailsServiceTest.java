package de.neuefische.backend.security;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UserDetails;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class MongoUserDetailsServiceTest {
MongoUserRepository mongoUserRepository = mock(MongoUserRepository.class);

MongoUserDetailsService mongoUserDetailsService = new MongoUserDetailsService(mongoUserRepository);
//    @Test
//    void loadUserByUsername() {
//
//        // GIVEN
//        MongoUser expected = new MongoUser("1", "Frank","123");
//        String username = "Frank";
//        mongoUserRepository.save(expected);
//
//        // THEN
//        UserDetails actual = mongoUserDetailsService.loadUserByUsername(username);
//
//        // WHEN
//        assertEquals(expected, actual);
//    }
}