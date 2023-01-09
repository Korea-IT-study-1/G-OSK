package com.Gosk.GoskProject20221221.domain.Admin;

import com.Gosk.GoskProject20221221.dto.admin.UserListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserList {

    public String user_phone;
    public String user_pw;

    public UserListDto toUserListDto() {
        return UserListDto.builder()
                .user_phone(user_phone)
                .user_pw(user_pw)
                .build();
    }


}


