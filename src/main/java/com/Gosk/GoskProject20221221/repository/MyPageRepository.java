package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.MyPage;
import com.Gosk.GoskProject20221221.domain.Seat;
import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface MyPageRepository {
    public List<MyPage> receipt(int user_id) throws Exception;

    public List<MyPage> receiptToday(int user_id) throws Exception;

    public List<MyPage> receiptMonth(int user_id) throws Exception;

    public List<MyPage> receiptMonth3(int user_id) throws Exception;

}
