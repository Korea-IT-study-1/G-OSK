package com.Gosk.GoskProject20221221.service.Locker;

import com.Gosk.GoskProject20221221.dto.Locker.LockerReqDto;
import com.Gosk.GoskProject20221221.repository.LockerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LockerServiceImpl implements LockerService {

    private final LockerRepository lockerRepository;
//  -------------------입실/퇴실---------------------------
    @Override
    public boolean updateLocker(LockerReqDto lockerReqDto, int id)throws Exception{
        return lockerRepository.updateLocker(lockerReqDto.toLockerEntity(id)) > 0;
    }
}
