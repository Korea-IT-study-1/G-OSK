package com.Gosk.GoskProject20221221.domain;

import com.Gosk.GoskProject20221221.dto.TimeReqDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Time {
    public int time;  //시간
    public String price;    //가격

    public TimeReqDto toRespDto(){
        return TimeReqDto.builder()
                .time(time)
                .price(price)
                .build();
    }
}
