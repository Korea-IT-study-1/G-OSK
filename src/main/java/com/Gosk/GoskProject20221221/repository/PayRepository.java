package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import com.Gosk.GoskProject20221221.domain.SetSeat;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PayRepository {

    public int historyadd(PayHistory payHistory);

    public int setSeat(SetSeat setSeat);
}
