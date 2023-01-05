package com.Gosk.GoskProject20221221.dto;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import com.Gosk.GoskProject20221221.domain.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PayHistoryReqDto {
    private int user_id;
    private String receipt_kinds;
    private int receipt_price;
    private int receipt_time;
    private int receipt_day;

    private String receipt_start_date;

    public PayHistory toHistoryEntity() {
        return PayHistory.builder()
                .user_id(user_id)
                .receipt_kinds(receipt_kinds)
                .receipt_price(receipt_price)
                .receipt_time(receipt_time)
                .receipt_day(receipt_day)
                .receipt_start_date(receipt_start_date)
                .build();
    }



}
