package com.Gosk.GoskProject20221221.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SetSeatCommuterTime {

    public int user_id;
    public String seat_id;
    public String paytime;
    public String seat_start_date;

}
