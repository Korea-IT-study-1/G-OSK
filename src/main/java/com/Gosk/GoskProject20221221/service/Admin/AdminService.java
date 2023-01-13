package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;
import com.Gosk.GoskProject20221221.dto.admin.UserListDto;

import java.util.List;

public interface AdminService {

    public List<PdListRespDto> getPdList(String name) throws Exception;
    public List<SalesList> salesList(int user_id) throws Exception;

    public List<UserListDto> loadUserList(String user_phone) throws Exception;

    public boolean deleteUser(String user_phone) throws Exception;

    public int updateUser(String user_phone, String after_phone, String after_pw) throws Exception;

    public List<UserInfoList> loadUserInfoList(String user_phone) throws Exception;

    public int repairBasicSeat(String seat_id) throws Exception;

    public int repairReservedSeat(String seat_id) throws Exception;

    public int repairLocker(String seat_id) throws Exception;

    public int exitBasicSeat(String seat_id) throws Exception;

}
