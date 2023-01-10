package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.dto.admin.DelPayListReqDto;
import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;

import java.util.List;

public interface AdminService {

    public List<PdListRespDto> getPdList(String name) throws Exception;

    public boolean getDelPayList(DelPayListReqDto delPayListReqDto) throws  Exception;

}
