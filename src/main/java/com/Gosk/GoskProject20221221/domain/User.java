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
    private int timehour;
    private int timeminute;
    private int timesecond;
    private int user_id;
    private int role_id;
    private int receipt_time;
    private int receipt_day;
    private String seat_id;
    private String reserved_seat_id;
    private String seat_num;
    private String reserved_num;
    private String locker_num;
    private String user_phone;
    private String receipt_kinds;
    private String user_pw;
    private String role;
    private String now;
    private String user_out;
    private String result;
    private LocalTime user_time;
    private String user_time2;
    private LocalDateTime user_date;
    private LocalTime user_locker_date;
    private String now;
    private LocalDateTime seat_start_time;
    private LocalDateTime user_create_date;
    private LocalDateTime user_update_date;
    private LocalDateTime receipt_start_date;
    private LocalDateTime receipt_end_date;

    private String user_endtime;
}