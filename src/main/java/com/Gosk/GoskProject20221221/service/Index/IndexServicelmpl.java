package com.Gosk.GoskProject20221221.service.Index;

import com.Gosk.GoskProject20221221.domain.Admin.*;
import com.Gosk.GoskProject20221221.domain.UserPayChk;
import com.Gosk.GoskProject20221221.dto.UserPayChkReqDto;
import com.Gosk.GoskProject20221221.dto.admin.*;
import com.Gosk.GoskProject20221221.repository.AdminRepository;
import com.Gosk.GoskProject20221221.repository.IndexRepository;
import com.Gosk.GoskProject20221221.service.Admin.AdminService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class IndexServicelmpl implements IndexService {

    private final IndexRepository indexRepository;

    @Override
    public boolean getUserPayChk(UserPayChkReqDto userPayChkReqDto) throws Exception {

        UserPayChk userPayChk = userPayChkReqDto.toUserPayChkEntity();
        
        boolean result = indexRepository.getUserPayChk(userPayChk);
        return result;
    }


}
