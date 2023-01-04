package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;

import java.util.List;

public interface PayService {

    public void historyadd(PayHistoryReqDto payHistoryReqDto) throws Exception;

}
