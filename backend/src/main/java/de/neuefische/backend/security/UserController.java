package de.neuefische.backend.security;

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
        return "Hallo" + principal.getName();
    }

    @PostMapping("login")
    public String login(){
        return "Schüüü du bischt eingelooooggttt";
    }
}
