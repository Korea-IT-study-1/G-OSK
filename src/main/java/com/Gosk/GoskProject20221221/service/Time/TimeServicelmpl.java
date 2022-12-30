package com.Gosk.GoskProject20221221.service.Time;

import com.Gosk.GoskProject20221221.domain.Time;
import com.Gosk.GoskProject20221221.dto.TimeReqDto;
import com.Gosk.GoskProject20221221.repository.TimeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class TimeServicelmpl implements TimeService {

    private final TimeRepository timeRepository;

    @Override
    public List<TimeReqDto> getTimeList() throws Exception{
//        log.info("{}", user_id);
        List<TimeReqDto> timeList = new ArrayList<>();

        Map<String, Object> map = new HashMap<>();

        timeRepository.getTimeList(map).forEach(Time -> {
            timeList.add(Time.toRespDto());
        });
        return timeList;
    }

}
