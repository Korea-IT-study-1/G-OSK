package com.Gosk.GoskProject20221221.dto;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class DayReqDto {
    private int user_id;
    private int timehour;
    private int timeminute;
    private int timesecond;

    private String result;
    private String now;
    public User todayEntity() {
        return User.builder()
                .user_id(user_id)
                .result(result)
                .now(now)
                .timehour(timehour)
                .timeminute(timeminute)
                .timesecond(timesecond)
                .build();
    }
//    public User toresultEntity() {
//        return User.builder()
//                .result(result)
//                .build();
//    }
}
