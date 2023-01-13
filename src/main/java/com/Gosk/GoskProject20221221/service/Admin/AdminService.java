package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.NowChangeReqDto;
import com.Gosk.GoskProject20221221.dto.admin.*;

import java.util.List;

public interface AdminService {

    public List<PdListRespDto> getPdList(String name) throws Exception;
    public List<SalesList> salesList(int user_id) throws Exception;

    public List<UserListDto> loadUserList(String user_phone) throws Exception;

    public boolean deleteUser(String user_phone) throws Exception;

    public int updateUser(String user_phone, String after_phone, String after_pw) throws Exception;

    public List<UserInfoList> loadUserInfoList(String user_phone) throws Exception;


    public boolean usertime(int user_id) throws Exception;

    public Object userday() throws Exception;

    public int repairBasicSeat(String seat_id) throws Exception;

    public int repairReservedSeat(String seat_id) throws Exception;

    public int repairLocker(String seat_id) throws Exception;

    public int exitBasicSeat(String seat_id) throws Exception;


    public boolean getDelPayList(DelPayListReqDto delPayListReqDto) throws Exception;

    public boolean getOverlapChk(OverlapChkReqDto overlapChkReqDto) throws Exception;
    public boolean getUpdOverlapChk(UpdOverlapChkReqDto updOverlapChkReqDto) throws Exception;

    public boolean getPayListInsert(OverlapChkReqDto overlapChkReqDto) throws Exception;

    public boolean getPayListUpdate(UpdPayListReqDto updPayListReqDto) throws Exception;

    public boolean nowchange(NowChangeReqDto nowChangeReqDto) throws Exception;
}
