package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.SetSeatCommuterDay;
import com.Gosk.GoskProject20221221.domain.SetSeatReserved;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SetSeatCommuterDayDto {
    private int user_id;
    private String seat_id;
    private int paytime;
    private String commuter_start_date;
    private String now_time;


    public SetSeatCommuterDay toSetSeatEntity(){
        return SetSeatCommuterDay.builder()
                .user_id(user_id)
                .seat_id(seat_id)
                .commuter_start_date(commuter_start_date)
                .now_time(now_time)
                .build();
    }
}
