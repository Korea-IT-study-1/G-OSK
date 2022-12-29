package com.Gosk.GoskProject20221221.service;

import com.Gosk.GoskProject20221221.dto.account.RegisterReqDto;

public interface AccountService {
    public boolean checkDuplicatePhone(String user_phone);
    public boolean register(RegisterReqDto registerReqDto) throws Exception;
}
