package com.Gosk.GoskProject20221221.repository;


import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface LockerRepository {
    public int updateLocker(User user) throws Exception;
}
