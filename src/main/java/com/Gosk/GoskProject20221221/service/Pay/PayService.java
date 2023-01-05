package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;
import com.Gosk.GoskProject20221221.dto.SetSeatOnedayDto;

public interface PayService {

    public boolean historyadd(PayHistoryReqDto payHistoryReqDto);

    public boolean setSeatOneday(SetSeatOnedayDto setSeatOnedayDto);

}
