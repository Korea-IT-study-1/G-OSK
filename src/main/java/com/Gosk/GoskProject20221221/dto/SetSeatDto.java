package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.SetSeat;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SetSeatDto {
    private int user_id;
    private String seat_id;

    public int paytime;
    private String seat_start_date;


    public SetSeat toSetSeatEntity(){
        return SetSeat.builder()
                .user_id(user_id)
                .seat_id(seat_id)
                .seat_start_date(seat_start_date)
                .build();
    }
}
