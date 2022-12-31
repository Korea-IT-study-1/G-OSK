package com.Gosk.GoskProject20221221.service.InOut;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;

import java.util.List;

public interface InOutService {

    public List<User> inOut(int user_id) throws Exception;

    public boolean out(int user_id) throws Exception;
}
