package com.Gosk.GoskProject20221221.domain.Admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesList {
    private int receipt_id;
    private int user_id;
    private String receipt_kinds;
    private int receipt_price;
    private int receipt_time;
    private int receipt_day;
    private LocalDateTime receipt_start_date;
    private int receipt_onoff;
    private int receipt_count;
}
