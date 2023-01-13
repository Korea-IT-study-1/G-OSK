package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.admin.*;

import java.util.List;
import java.util.Map;

public interface AdminService {

    public List<PdListRespDto> getPdList(String name) throws Exception;
    public List<SalesList> salesList(int user_id) throws Exception;

    public List<UserListDto> loadUserList(String user_phone) throws Exception;

    public boolean deleteUser(String user_phone) throws Exception;

    public int updateUser(String user_phone, String after_phone, String after_pw) throws Exception;

    public List<UserInfoList> loadUserInfoList(String user_phone) throws Exception;


    public boolean usertime(int user_id) throws Exception;

    public Object userday() throws Exception;

    public int repairBasicSeat(Map<String, Object> map) throws Exception;

    public int repairReservedSeat(Map<String, Object> map) throws Exception;

    public int repairLocker(Map<String, Object> map) throws Exception;

    public int exitBasicSeat(Map<String, Object> map) throws Exception;

    public int exitReservedSeat(Map<String, Object> map) throws Exception;

    public int exitLocker(Map<String, Object> map) throws Exception;


    public boolean getDelPayList(DelPayListReqDto delPayListReqDto) throws Exception;

    public boolean getOverlapChk(OverlapChkReqDto overlapChkReqDto) throws Exception;
    public boolean getUpdOverlapChk(UpdOverlapChkReqDto updOverlapChkReqDto) throws Exception;

    public boolean getPayListInsert(OverlapChkReqDto overlapChkReqDto) throws Exception;

    public boolean getPayListUpdate(UpdPayListReqDto updPayListReqDto) throws Exception;
}
