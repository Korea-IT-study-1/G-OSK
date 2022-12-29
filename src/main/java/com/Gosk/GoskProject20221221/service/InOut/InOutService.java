package com.Gosk.GoskProject20221221.service.InOut;

import com.Gosk.GoskProject20221221.domain.User;

import java.util.List;

public interface InOutService {

    public List<User> inOut(int user_id) throws Exception;
}
