package com.Gosk.GoskProject20221221.dto.admin;

import com.Gosk.GoskProject20221221.domain.Admin.OverlapChk;
import com.Gosk.GoskProject20221221.domain.PayHistory;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OverlapChkReqDto {
    private String name;
    private String subname;
    private String time;
    private String price;

    public OverlapChk toOverlapChkEntity() {
        return OverlapChk.builder()
                .name(name)
                .subname(subname)
                .time(time)
                .price(price)
                .build();
    }
}
