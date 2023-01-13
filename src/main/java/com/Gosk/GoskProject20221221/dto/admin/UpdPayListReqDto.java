package com.Gosk.GoskProject20221221.dto.admin;

import com.Gosk.GoskProject20221221.domain.Admin.DelPayList;
import com.Gosk.GoskProject20221221.domain.Admin.UpdPayList;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdPayListReqDto {
    private String id;
    private String seat;
    private String time;
    private String before_pdname;
    private String before_pdprice;
    private String after_pdname;
    private String after_pdprice;

    public UpdPayList toUpdListEntity(){
        return UpdPayList.builder()
                .id(id)
                .seat(seat)
                .time(time)
                .before_pdname(before_pdname)
                .before_pdprice(before_pdprice)
                .after_pdname(after_pdname)
                .after_pdprice(after_pdprice)
                .build();
    }
}
