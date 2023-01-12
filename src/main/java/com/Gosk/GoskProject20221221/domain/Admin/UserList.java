package com.Gosk.GoskProject20221221.domain.Admin;

import com.Gosk.GoskProject20221221.dto.admin.UserListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserList {

    public String user_phone;
    public String user_pw;
    public int user_id;
    public LocalDateTime user_create_date;
    public LocalDateTime user_update_date;

    public UserListDto toUserListDto() {
        return UserListDto.builder()
                .user_id(user_id)
                .user_phone(user_phone)
                .user_pw(user_pw)
                .user_create_date(user_create_date)
                .user_update_date(user_update_date)
                .build();
    }


}


