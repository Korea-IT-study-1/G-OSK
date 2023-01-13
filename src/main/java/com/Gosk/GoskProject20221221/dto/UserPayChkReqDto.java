package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import com.Gosk.GoskProject20221221.domain.UserPayChk;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserPayChkReqDto {
    private int user_id;
    private String timename;

    public UserPayChk toUserPayChkEntity() {
        return UserPayChk.builder()
                .user_id(user_id)
                .timename(timename)
                .build();
    }
}
