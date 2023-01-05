package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.domain.Seat;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.dto.SeatListRespDto;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;

import java.util.List;

public interface SeatService {
    public boolean inoutUser(InOutReqDto inOutReqDto, PrincipalDetails principalDetails) throws  Exception;
    public boolean zero(InOutReqDto inOutReqDto, PrincipalDetails principalDetails) throws  Exception;
    public boolean reservedinoutUser(InOutReqDto inOutReqDto, PrincipalDetails principalDetails) throws  Exception;
    public boolean reservedzero(InOutReqDto inOutReqDto, PrincipalDetails principalDetails) throws  Exception;
    public List<User> check(int user_id) throws Exception;

    public List<Seat> checkuser(int user_id) throws Exception;
    public List<Seat>  seatuser(int user_id) throws Exception;

}
