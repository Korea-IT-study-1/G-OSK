package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;

import java.util.List;

public interface AdminService {

    public List<PdListRespDto> getPdList(String name) throws Exception;
    public List<SalesList> salesList(int user_id) throws Exception;

}
