package com.Gosk.GoskProject20221221.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MyPage {
    private int user_id;
    private LocalDateTime receipt_start_date;
    private String receipt_kinds;
    private int receipt_price;
    private int receipt_time;
    private int receipt_day;

}
