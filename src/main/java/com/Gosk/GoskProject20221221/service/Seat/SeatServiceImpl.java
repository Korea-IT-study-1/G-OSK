package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.repository.SeatRepository;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SeatServiceImpl implements SeatService{
    private final SeatRepository seatRepository;
    //  -------------------입실/퇴실---------------------------
    @Override
    public boolean inoutUser(InOutReqDto seatReqDto, PrincipalDetails principalDetails)throws Exception{
        log.info("실패햇어요!!!!!!!!!!!!!!! : {}, {} ", seatReqDto,principalDetails);

//
//        LocalDateTime now = LocalDateTime.now();
//
//        LocalDateTime finalTime = now.plusHours(3);


        return seatRepository.inoutUser(seatReqDto.toSeatEntity(principalDetails)) > 0;
    }
}
