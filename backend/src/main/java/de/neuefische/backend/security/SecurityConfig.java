package de.neuefische.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new Argon2PasswordEncoder();
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .httpBasic()
                .authenticationEntryPoint(((request, response, authException) -> response
                        .sendError(HttpStatus.UNAUTHORIZED
                                .value(),HttpStatus
                                .UNAUTHORIZED
                                .getReasonPhrase())))
                .and()
                .authorizeRequests()
                .antMatchers("/api/exchange").authenticated()
                .antMatchers("/**").permitAll()
                .and()
                .build();
    }
}
