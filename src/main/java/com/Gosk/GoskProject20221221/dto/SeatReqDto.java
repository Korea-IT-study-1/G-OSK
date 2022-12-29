package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.User;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class SeatReqDto {

    private String seat_num;


    public User toSeatEntity(int user_id) {
        return User.builder()
                .user_id(user_id)
                .seat_num(seat_num)
                .build();
    }
}
