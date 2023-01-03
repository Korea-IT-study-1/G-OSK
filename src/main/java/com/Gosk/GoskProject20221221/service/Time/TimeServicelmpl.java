package com.Gosk.GoskProject20221221.service.Time;

import com.Gosk.GoskProject20221221.dto.TimeRespDto;
import com.Gosk.GoskProject20221221.repository.TimeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class TimeServicelmpl implements TimeService {

    private final TimeRepository timeRepository;

    @Override
    public List<TimeRespDto> getTimeList(String listname) throws Exception{
        List<TimeRespDto> timeList = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();

        log.info("listname 값 : {}", listname);

        if(listname.equals("oneday") == true){
            timeRepository.getOnedayList(map).forEach(Time -> {
                timeList.add(Time.toRespDto());
            });
        } else if(listname.equals("commuter") == true) {
            timeRepository.getCoummuterList(map).forEach(Time -> {
                timeList.add(Time.toRespDto());
            });
        } else if(listname.equals("reserved") == true) {
            timeRepository.getReservedList(map).forEach(Time -> {
                timeList.add(Time.toRespDto());
            });
        } else if(listname.equals("locker") == true) {
            timeRepository.getLockerList(map).forEach(Time -> {
                timeList.add(Time.toRespDto());
            });
        }

        return timeList;
    }

}
