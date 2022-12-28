package com.Gosk.GoskProject20221221.service.Locker;

import com.Gosk.GoskProject20221221.dto.Loker.LockerReqDto;
import com.Gosk.GoskProject20221221.repository.Loker.LockerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LockerServiceImpl {

    private final LockerRepository lockerRepository;
//  -------------------입실/퇴실---------------------------
    public boolean updateLocker(LockerReqDto lockerReqDto)throws Exception{
        return lockerRepository.updateLocker(lockerReqDto.toLockerEntity(principal))>0;
    }
}
