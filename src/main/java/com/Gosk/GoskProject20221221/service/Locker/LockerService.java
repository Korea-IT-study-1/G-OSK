package com.Gosk.GoskProject20221221.service.Locker;

import com.Gosk.GoskProject20221221.dto.Locker.LockerReqDto;

public interface LockerService {
    public boolean updateLocker(LockerReqDto lockerReqDto, int id) throws Exception;
}
