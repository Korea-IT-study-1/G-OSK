package com.Gosk.GoskProject20221221.dto.Locker;


import com.Gosk.GoskProject20221221.domain.Locker;
import com.Gosk.GoskProject20221221.domain.User;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LockerReqDto {
    private int user_id;
    private String loker_num;


    public User toLockerEntity(int id) {
        return User.builder()
                .user_id(id)
                .locker_num(loker_num)
                .build();
    }
}
