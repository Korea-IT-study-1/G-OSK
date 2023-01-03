package com.Gosk.GoskProject20221221.dto.admin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PdListRespDto {
    public String pdname; //제품명
    public String time; //시간
    public String price; //가격
}
