package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class InOutReqDto {

    private String seat_id;


    public User toSeatEntity(PrincipalDetails principalDetails) {
        return User.builder()
                .user_id(principalDetails.getUser().getUser_id())
                .seat_id(seat_id)
                .user_out(seat_id)
                .build();
    }
//    public User toReservedEntity(PrincipalDetails principalDetails) {
//        return User.builder()
//                .user_id(principalDetails.getUser().getUser_id())
//                .reserved_seat_id(reserved_seat_id)
//                .user_out(reserved_seat_id)
//                .build();

}
