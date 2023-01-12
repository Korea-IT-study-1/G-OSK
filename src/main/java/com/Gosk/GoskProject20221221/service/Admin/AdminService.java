package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.dto.admin.*;

import java.util.List;

public interface AdminService {

    public List<PdListRespDto> getPdList(String name) throws Exception;

    public boolean getDelPayList(DelPayListReqDto delPayListReqDto) throws Exception;

    public boolean getOverlapChk(OverlapChkReqDto overlapChkReqDto) throws Exception;
    public boolean getUpdOverlapChk(UpdOverlapChkReqDto updOverlapChkReqDto) throws Exception;

    public boolean getPayListInsert(OverlapChkReqDto overlapChkReqDto) throws Exception;

    public boolean getPayListUpdate(UpdPayListReqDto updPayListReqDto) throws Exception;
}
