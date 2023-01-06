package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.domain.*;
import com.Gosk.GoskProject20221221.dto.*;
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
    public boolean setSeatReserved(SetSeatReservedDto setSeatReservedDto) {

        LocalDateTime now = LocalDateTime.now();

        setSeatReservedDto.setNow_time(now.toString().substring(0, now.toString().lastIndexOf(".")));

        setSeatReservedDto.setReserved_start_date(now.plusWeeks(setSeatReservedDto.getPaytime()).toString().substring(0, now.toString().lastIndexOf(".")));

        System.out.println("setSeatDto : {}" + setSeatReservedDto);

        SetSeatReserved setSeatReserved = setSeatReservedDto.toSetSeatEntity();

        int result = payRepository.setSeatReserved(setSeatReserved);

        return result != 0;
    }

    @Override
    public boolean setLocker(SetLockerReqDto setLockerReqDto) {

        LocalDateTime now = LocalDateTime.now();

        setLockerReqDto.setLocker_start_time(now.toString().substring(0, now.toString().lastIndexOf(".")));

        setLockerReqDto.setLocker_end_time(now.plusWeeks(setLockerReqDto.getPaytime()).toString().substring(0, now.toString().lastIndexOf(".")));

        System.out.println("setLockerReqDto : {}" + setLockerReqDto);

        Locker locker = setLockerReqDto.toLocker();

        int result = payRepository.setLocker(locker);

        return result != 0;
    }


}
