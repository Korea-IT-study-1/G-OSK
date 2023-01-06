package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.dto.*;

public interface PayService {

    public boolean historyadd(PayHistoryReqDto payHistoryReqDto);

    public boolean setSeatOneday(SetSeatOnedayDto setSeatOnedayDto);

    public boolean setSeatCommuterTime(SetSeatCommuterTimeDto setSeatCommuterTimeDto);

    public boolean setSeatCommuterDay(SetSeatCommuterDayDto setSeatCommuterDayDto);

    public boolean setSeatReserved(SetSeatReservedDto setSeatReservedDto);

    public boolean setLocker(SetLockerReqDto setLockerReqDto);


}
