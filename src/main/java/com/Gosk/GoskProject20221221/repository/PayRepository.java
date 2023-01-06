package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PayRepository {

    public int historyadd(PayHistory payHistory);

    public int setSeatOneday(SetSeatOneday setSeatOneday);

    public int setSeatCommuterTime(SetSeatCommuterTime setSeatCommuterTime);
    public int setSeatCommuterDay(SetSeatCommuterDay setSeatCommuterDay);

    public int setSeatReserved(SetSeatReserved setSeatReserved);
}
