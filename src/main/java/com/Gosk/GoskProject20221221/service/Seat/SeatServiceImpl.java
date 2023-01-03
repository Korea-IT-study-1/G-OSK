package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.repository.SeatRepository;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
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
    public boolean inoutUser(InOutReqDto inOutReqDto, PrincipalDetails principalDetails)throws Exception{
        log.info("실패햇어요!!!!!!!!!!!!!!! : {}, {} ", inOutReqDto,principalDetails);


        return seatRepository.inoutUser(inOutReqDto.toSeatEntity(principalDetails)) > 0;
    }
}
