package com.Gosk.GoskProject20221221.service;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.account.RegisterReqDto;
import com.Gosk.GoskProject20221221.exception.CustomValidationException;
import com.Gosk.GoskProject20221221.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;


    @Override
    public boolean checkDuplicatePhone(String user_phone) {

        User user = accountRepository.findUserByPhone(user_phone);

        if(user != null) {
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("duplicateFlag", "이미 가입된 휴대폰 번호입니다.");
            throw new CustomValidationException("DuplicatePhone Error", errorMap);
        }

        return true;
    }

    @Override
    public boolean register(RegisterReqDto registerReqDto) throws Exception {
        User userEntity = registerReqDto.toUserEntity();
        int result = accountRepository.save(userEntity);

        return result != 0;
    }
}
