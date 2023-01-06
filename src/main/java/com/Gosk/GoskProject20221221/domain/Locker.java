package com.Gosk.GoskProject20221221.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Locker {

    public int user_id;
    public String locker_id;

    public int paytime;

    public String locker_start_time;
    public String locker_end_time;

}
