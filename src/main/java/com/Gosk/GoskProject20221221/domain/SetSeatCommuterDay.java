package com.Gosk.GoskProject20221221.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SetSeatCommuterDay {

    public int user_id;
    public String seat_id;
    public int paytime;
    public String commuter_start_date;
    public String now_time;

}
