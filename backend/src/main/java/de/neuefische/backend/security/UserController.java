package de.neuefische.backend.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("api/users")
public class UserController {

    @GetMapping("me")
    public String helloMe(Principal principal){
        if(principal != null){
            return principal.getName();
        }
        return "Mousse au chocolat!";
    }

    @PostMapping("login")
    public String login(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
