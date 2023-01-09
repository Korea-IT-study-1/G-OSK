package com.Gosk.GoskProject20221221.dto.admin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserListDto {

    public String user_phone;
    public String user_pw;

}
