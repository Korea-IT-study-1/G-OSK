package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class InOutReqDto {

    private String seat_num;


    public User toSeatEntity(PrincipalDetails principalDetails) {
        return User.builder()
                .user_id(principalDetails.getUser().getUser_id())
                .seat_num(seat_num)
                .build();
    }
}
