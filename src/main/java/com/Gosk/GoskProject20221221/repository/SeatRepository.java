package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeatRepository {
    public int inoutUser(User user) throws Exception;

    public int zero(User user) throws Exception;

    public int reservedinoutUser(User user) throws Exception;

    public int reservedzero(User user) throws Exception;

    public List<User> check(int user_id) throws Exception;
}
