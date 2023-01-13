package com.Gosk.GoskProject20221221.service.Index;

import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.dto.UserPayChkReqDto;
import com.Gosk.GoskProject20221221.dto.admin.*;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;

import java.util.List;

public interface IndexService {

    public boolean getUserPayChk(UserPayChkReqDto userPayChkReqDto) throws Exception;
}
