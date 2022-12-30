package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.dto.SeatReqDto;
import com.Gosk.GoskProject20221221.repository.LockerRepository;
import com.Gosk.GoskProject20221221.repository.SeatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class SeatServiceImpl implements SeatService{
    private final SeatRepository seatRepository;
    //  -------------------입실/퇴실---------------------------
    @Override
    public boolean inoutUser(SeatReqDto seatReqDto, int user_id)throws Exception{
        log.info("실패햇어요!!!!!!!!!!!!!!! : {}, {} ", seatReqDto,user_id);

//
//        LocalDateTime now = LocalDateTime.now();
//
//        LocalDateTime finalTime = now.plusHours(3);


        return seatRepository.inoutUser(seatReqDto.toSeatEntity(user_id)) > 0;
    }
}
