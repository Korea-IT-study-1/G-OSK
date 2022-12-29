package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {

    public int save(User user);

    public User findUserByPhone(String user_phone);

}
