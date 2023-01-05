package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;
import com.Gosk.GoskProject20221221.dto.SetSeatDto;

import java.util.List;

public interface PayService {

    public boolean historyadd(PayHistoryReqDto payHistoryReqDto);

    public boolean setSeat(SetSeatDto setSeatDto);

}
