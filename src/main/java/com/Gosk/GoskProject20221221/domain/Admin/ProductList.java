package com.Gosk.GoskProject20221221.domain.Admin;

import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductList {
    public String pdname; //제품명
    public String time; //시간
    public String price; //가격

    public PdListRespDto toRespDto(){
        return PdListRespDto.builder()
                .pdname(pdname)
                .time(time)
                .price(price)
                .build();
    }
}
