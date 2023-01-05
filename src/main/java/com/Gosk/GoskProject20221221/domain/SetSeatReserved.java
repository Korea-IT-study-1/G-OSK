package com.Gosk.GoskProject20221221.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SetSeatReserved {

    public int user_id;
    public String seat_id;

    public int paytime;
    public String reserved_start_date;
    private String now_time;

}
