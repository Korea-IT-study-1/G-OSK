package com.Gosk.GoskProject20221221.repository;


import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface InOutRepository {
    public List<User> inOut(int user_id) throws Exception;

    public int out(User user) throws Exception;

    public int day(User user) throws Exception;

    public int inoutcheck(User user) throws Exception;
}

