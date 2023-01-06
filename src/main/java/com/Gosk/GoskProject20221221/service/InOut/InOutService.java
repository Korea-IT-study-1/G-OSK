package com.Gosk.GoskProject20221221.service.InOut;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.DayReqDto;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;

import java.util.List;

public interface InOutService {

    public List<User> inOut(int user_id) throws Exception;

    public Object out(User principalDetails) throws Exception;

    public Object day(DayReqDto dayReqDto, int user_id) throws  Exception;

    public Object inoutcheck(User principalDetails) throws Exception;
}
