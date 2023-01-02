package com.Gosk.GoskProject20221221.dto;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DayReqDto {
    private int timehour;
    private int timeminute;
    private int timesecond;
    public User todayEntity() {
        return User.builder()

                .timehour(timehour)
                .timeminute(timehour)
                .timesecond(timesecond)
                .build();
    }
}
