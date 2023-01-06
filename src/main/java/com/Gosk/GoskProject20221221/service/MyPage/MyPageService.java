package com.Gosk.GoskProject20221221.service.MyPage;

import com.Gosk.GoskProject20221221.domain.MyPage;
import com.Gosk.GoskProject20221221.domain.User;

import java.util.List;

public interface MyPageService {


    public List<MyPage> receipt(int user_id) throws Exception;;

    public List<MyPage> receiptToday(int user_id) throws Exception;

    public List<MyPage> receiptMonth(int user_id) throws Exception;

    public List<MyPage> receiptMonth3(int user_id) throws Exception;
}
