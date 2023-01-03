package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;

public interface SeatService {
    public boolean inoutUser(InOutReqDto inOutReqDto, PrincipalDetails principalDetails) throws  Exception;
}
