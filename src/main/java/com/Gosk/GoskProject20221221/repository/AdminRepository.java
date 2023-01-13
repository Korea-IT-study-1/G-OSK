package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.domain.Admin.UserList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Mapper
public interface AdminRepository {
    public List<ProductList> getReservedList(Map<String, Object> map) throws Exception;

    public List<ProductList> getGeneralList(Map<String, Object> map) throws Exception;
    
    public List<UserList> loadUserList(Map<String, Object> map) throws Exception;

    public int deleteUser(String user_phone) throws Exception;

    public int updateUser(Map<String, Object> map) throws Exception;

    public List<UserInfoList> loadUserInfoList(String user_phone) throws Exception;
    public List<SalesList> salesList(int user_id) throws Exception;


    public int usertime(int user_id) throws Exception;

    public int userday(String now) throws Exception;

    public int repairBasicSeat(String seat_id) throws Exception;

    public int repairReservedSeat(String seat_id) throws Exception;

    public int repairLocker(String seat_id) throws Exception;

    public int exitBasicSeat(String seat_id) throws Exception;

}
