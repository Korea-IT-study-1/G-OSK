package com.Gosk.GoskProject20221221.service.Time;

import com.Gosk.GoskProject20221221.dto.TimeRespDto;

import java.util.List;

public interface TimeService {
    public List<TimeRespDto> getTimeList(String listname) throws Exception;

}
