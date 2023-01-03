package com.Gosk.GoskProject20221221.domain;

import com.Gosk.GoskProject20221221.dto.TimeRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Time {
    public String time;  //시간
    public String price;    //가격

    public TimeRespDto toRespDto(){
        return TimeRespDto.builder()
                .time(time)
                .price(price)
                .build();
    }
}
