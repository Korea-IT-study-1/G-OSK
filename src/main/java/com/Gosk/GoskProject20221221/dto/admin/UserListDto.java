package com.Gosk.GoskProject20221221.dto.admin;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class UserListDto {

    public String user_phone;
    public String user_pw;
    public int user_id;

    public LocalDateTime user_create_date;
    public LocalDateTime user_update_date;
}
