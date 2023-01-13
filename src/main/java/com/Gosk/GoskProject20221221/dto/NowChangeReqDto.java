package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.Admin.NowChange;
import com.Gosk.GoskProject20221221.domain.Admin.OverlapChk;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class NowChangeReqDto {
    private String today;

    private String change;
    private int todayval;

    private String product;

    public NowChange toNowChangeEntity() {
        return NowChange.builder()
                .today(today)
                .todayval(todayval)
                .change(change)
                .product(product)
                .build();
    }


}
