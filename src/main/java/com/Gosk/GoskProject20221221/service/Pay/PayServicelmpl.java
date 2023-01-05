package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import com.Gosk.GoskProject20221221.domain.SetSeatCommuterTime;
import com.Gosk.GoskProject20221221.domain.SetSeatOneday;
import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;
import com.Gosk.GoskProject20221221.dto.SetSeatCommuterTimeDto;
import com.Gosk.GoskProject20221221.dto.SetSeatOnedayDto;
import com.Gosk.GoskProject20221221.repository.PayRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PayServicelmpl implements PayService{

    private final PayRepository payRepository;

    @Override
    public boolean historyadd(PayHistoryReqDto payHistoryReqDto){

        LocalDateTime now = LocalDateTime.now();
        payHistoryReqDto.setReceipt_start_date(now.toString().substring(0, now.toString().lastIndexOf(".")));

        System.out.println("RepositoryDto : {}" + payHistoryReqDto);

        PayHistory historyEntity = payHistoryReqDto.toHistoryEntity();

        int result = payRepository.historyadd(historyEntity);

        return result != 0;
    }

    @Override
    public boolean setSeatOneday(SetSeatOnedayDto setSeatOnedayDto) {

        LocalDateTime now = LocalDateTime.now();

        setSeatOnedayDto.setSeat_start_date(now.plusHours(setSeatOnedayDto.getPaytime()).toString().substring(0, now.toString().lastIndexOf(".")));

        System.out.println("setSeatDto : {}" + setSeatOnedayDto);

        SetSeatOneday setSeatOneday = setSeatOnedayDto.toSetSeatEntity();

        int result = payRepository.setSeatOneday(setSeatOneday);

        return result != 0;
    }

    @Override
    public boolean setSeatCommuterTime(SetSeatCommuterTimeDto setSeatCommuterTimeDto) {

        LocalDateTime now = LocalDateTime.now();

//        setSeatCommuterTimeDto.setSeat_start_date(
//                now.plusHours(setSeatCommuterTimeDto.getPaytime())
//                        .toString().substring(0, now.toString().lastIndexOf(".")));
//        setSeatCommuterTimeDto.setPaytime(
//
//                setSeatCommuterTimeDto.getPaytime()
//
//        );
        setSeatCommuterTimeDto.setSeat_start_date(now.toString().substring(0, now.toString().lastIndexOf(".")));
        SetSeatCommuterTime setSeatCommuterTime = setSeatCommuterTimeDto.toSetSeatEntity();
        int result = payRepository.setSeatCommuterTime(setSeatCommuterTime);

        return result != 0;
    }

}
