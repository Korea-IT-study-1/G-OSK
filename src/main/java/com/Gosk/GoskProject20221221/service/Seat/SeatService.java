package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.dto.SeatReqDto;

public interface SeatService {

    public boolean inoutUser(SeatReqDto seatReqDto, int user_id) throws  Exception;
}
