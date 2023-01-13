package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Admin.*;
import com.Gosk.GoskProject20221221.domain.UserPayChk;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface IndexRepository {

    //사용자 이용권 중복 확인
    public boolean getUserPayChk(UserPayChk userPayChk) throws Exception;

}
