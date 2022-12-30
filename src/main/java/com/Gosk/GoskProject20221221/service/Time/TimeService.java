package com.Gosk.GoskProject20221221.service.Time;

import com.Gosk.GoskProject20221221.dto.TimeReqDto;

import java.util.List;

public interface TimeService {
    public List<TimeReqDto> getTimeList() throws Exception;

}
