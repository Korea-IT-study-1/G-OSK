package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PayRepository {

    public void historyadd(PayHistory payHistory) throws Exception;


}
