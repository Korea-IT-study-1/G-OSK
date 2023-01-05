package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import com.Gosk.GoskProject20221221.domain.SetSeat;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;
import com.Gosk.GoskProject20221221.dto.SetSeatDto;
import com.Gosk.GoskProject20221221.repository.PayRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

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
    public boolean setSeat(SetSeatDto setSeatDto) {

        LocalDateTime now = LocalDateTime.now();
//        setSeatDto.setSeat_start_date(now.toString().substring(0, now.toString().lastIndexOf(".")));

        setSeatDto.setSeat_start_date(now.plusHours(setSeatDto.getPaytime()).toString().substring(0, now.toString().lastIndexOf(".")));

        System.out.println("setSeatDto : {}" + setSeatDto);

        SetSeat setSeat = setSeatDto.toSetSeatEntity();

        System.out.println();

        int result = payRepository.setSeat(setSeat);

        return result != 0;
    }

}
