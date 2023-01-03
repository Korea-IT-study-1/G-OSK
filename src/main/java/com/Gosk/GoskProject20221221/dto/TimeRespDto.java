package com.Gosk.GoskProject20221221.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TimeRespDto {

    public String time;  //시간
    public String price;    //가격

}
