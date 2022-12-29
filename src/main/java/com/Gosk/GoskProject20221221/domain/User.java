package com.Gosk.GoskProject20221221.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private int user_id;
    private int role_id;
    private int seat_num;
    private int reserved_num;
    private String locker_num;
    private String user_phone;
    private String user_pw;
    private LocalTime user_time;
    private LocalTime user_date;
    private LocalTime user_locker_date;
    private LocalDateTime user_create_date;
    private LocalDateTime user_update_date;
}
