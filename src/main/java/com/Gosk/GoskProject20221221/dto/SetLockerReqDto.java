package com.Gosk.GoskProject20221221.dto;


import com.Gosk.GoskProject20221221.domain.Locker;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SetLockerReqDto {

    private int user_id;

    private String locker_id;

    private int paytime;

    private String locker_start_time;

    private String locker_end_time;

    public Locker toLocker(){
        return Locker.builder()
                .user_id(user_id)
                .locker_id(locker_id)
                .locker_start_time(locker_start_time)
                .locker_end_time(locker_end_time)
                .build();
    }

}
