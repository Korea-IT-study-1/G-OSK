package com.Gosk.GoskProject20221221.dto.Locker;


import com.Gosk.GoskProject20221221.domain.Locker;
import com.Gosk.GoskProject20221221.domain.User;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LockerReqDto {
    private String locker_num;


    public User toLockerEntity(int user_id) {
        return User.builder()
                .user_id(user_id)
                .locker_num(locker_num)
                .build();
    }
}
