package com.Gosk.GoskProject20221221.dto;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SeatListRespDto {
    private String seat_id;

    private String reserved_seat_id;
    private int user_id;
}
