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

    private String seat_id;

    private int user_id;

    public SeatListRespDto seatListRespDto() {
        return SeatListRespDto.builder()
                .seat_id(seat_id)
                .build();

    }
}
