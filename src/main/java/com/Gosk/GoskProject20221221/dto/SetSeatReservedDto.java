package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.SetSeatReserved;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SetSeatReservedDto {
    private int user_id;
    private String seat_id;

    private int paytime;
    private String reserved_start_date;

    private String now_time;


    public SetSeatReserved toSetSeatEntity(){
        return SetSeatReserved.builder()
                .user_id(user_id)
                .seat_id(seat_id)
                .reserved_start_date(reserved_start_date)
                .now_time(now_time)
                .build();
    }
}
