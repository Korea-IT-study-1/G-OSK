package com.Gosk.GoskProject20221221.domain;


import com.Gosk.GoskProject20221221.dto.SeatListRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Seat {
    private String reserved_seat_id;
    private String seat_id;

    private int user_id;


}
