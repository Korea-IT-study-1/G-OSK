package com.Gosk.GoskProject20221221.service.auth;

import com.Gosk.GoskProject20221221.domain.User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

@Getter
public class PrincipalDetails implements UserDetails {

    private User user;
    private Map<String, Object> attributes;

    public PrincipalDetails(User user){
        this.user = user;
    }

    public PrincipalDetails(User user, Map<String, Object> attributes){
        this.user = user;
        this.attributes = attributes;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
        grantedAuthorities.add(() -> user.getRole());
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return user.getUser_pw();
    }

    @Override
    public String getUsername() {
        return user.getUser_phone();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
