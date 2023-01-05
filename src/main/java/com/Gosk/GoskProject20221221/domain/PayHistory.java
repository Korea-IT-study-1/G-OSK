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
public class PayHistory {
    public int user_id;
    public String receipt_kinds;
    public int receipt_price;
    public int receipt_time;
    public int receipt_day;

    public String receipt_start_date;
}
