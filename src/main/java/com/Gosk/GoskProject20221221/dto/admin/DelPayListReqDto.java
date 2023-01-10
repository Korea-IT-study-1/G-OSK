package com.Gosk.GoskProject20221221.dto.admin;

import com.Gosk.GoskProject20221221.domain.Admin.DelPayList;
import com.Gosk.GoskProject20221221.domain.SetSeatCommuterDay;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DelPayListReqDto {
    private int product_id;
    private String product_name;
    private String product_secondname;

    public DelPayList toDelListEntity(){
        return DelPayList.builder()
                .product_id(product_id)
                .product_name(product_name)
                .product_secondname(product_secondname)
                .build();
    }
}
