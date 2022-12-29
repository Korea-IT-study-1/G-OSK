package com.Gosk.GoskProject20221221.service.auth;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String user_phone) throws UsernameNotFoundException {
//        User user = accountRepository.findUserByPhone(user_phone);

//        if(user == null) {
//            log.error("아이디를 찾지 못함");
//            throw new UsernameNotFoundException("존재하지 않는 아이디입니다.");
//
//        }

//        return new PrincipalDetails(user);
        return null;
    }
}
