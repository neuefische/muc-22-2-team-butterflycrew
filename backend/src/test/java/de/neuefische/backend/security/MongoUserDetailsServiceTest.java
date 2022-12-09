package de.neuefische.backend.security;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class MongoUserDetailsServiceTest {
MongoUserRepository mongoUserRepository = mock(MongoUserRepository.class);

MongoUserDetailsService mongoUserDetailsService = new MongoUserDetailsService(mongoUserRepository);
    @Test
    void loadUserByUsernameExpectUsernameNotFound() {

        // GIVEN

        String username = "Frank";


        // THEN
        when(mongoUserRepository.findByUsername(username)).thenReturn(Optional.empty());

        // WHEN
        assertThrows(UsernameNotFoundException.class,()->mongoUserDetailsService.loadUserByUsername(username));
    }

    @Test
    void loadUserByUsernameExpectUsername(){

        // GIVEN
        MongoUser expacted = new MongoUser("123", "Frank", "ABCDE");
        String username = "Frank";

        // WHEN
        when(mongoUserRepository.findByUsername(username)).thenReturn(Optional.of(expacted));
        UserDetails user = mongoUserDetailsService.loadUserByUsername(username);
        // THEN

        assertEquals(expacted.username(),user.getUsername());
    }
}