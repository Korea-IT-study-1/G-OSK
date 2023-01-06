package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.SetSeatCommuterTime;
import com.Gosk.GoskProject20221221.domain.SetSeatOneday;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SetSeatCommuterTimeDto {
    private int user_id;
    private String seat_id;
    private String paytime;
    private String seat_start_date;

    public SetSeatCommuterTime toSetSeatEntity(){
        return SetSeatCommuterTime.builder()
                .user_id(user_id)
                .seat_id(seat_id)
                .paytime(paytime)
                .seat_start_date(seat_start_date)
                .build();
    }
}
