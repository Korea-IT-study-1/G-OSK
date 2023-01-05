package com.Gosk.GoskProject20221221.service.Seat;

import com.Gosk.GoskProject20221221.domain.Seat;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.dto.SeatListRespDto;
import com.Gosk.GoskProject20221221.repository.SeatRepository;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    @Override
    public boolean zero(InOutReqDto inOutReqDto, PrincipalDetails principalDetails)throws Exception{
        log.info("실패햇어요!!!!!!!!!!!!!!! : {}, {} ", inOutReqDto,principalDetails);

        return seatRepository.zero(inOutReqDto.toSeatEntity(principalDetails)) > 0;
    }
    public boolean reservedinoutUser(InOutReqDto inOutReqDto, PrincipalDetails principalDetails)throws Exception{
        log.info("지정석실패햇어요!!!!!!!!!!!!!!! : {}, {} ", inOutReqDto,principalDetails);


        return seatRepository.reservedinoutUser(inOutReqDto.toSeatEntity(principalDetails)) > 0;
    }
    @Override
    public boolean reservedzero(InOutReqDto inOutReqDto, PrincipalDetails principalDetails)throws Exception{
        log.info("지정석실패햇어요!!!!!!!!!!!!!!! : {}, {} ", inOutReqDto,principalDetails);

        return seatRepository.reservedzero(inOutReqDto.toSeatEntity(principalDetails)) > 0;
    }
    @Override
    public List<User> check(int user_id) throws Exception {

        return seatRepository.check(user_id);
    }
    @Override
    public List<Seat> checkuser(int user_id) throws Exception {
//        Map<String, Object> paramsMap = new HashMap<String, Object>();
//        paramsMap.put("userseat", userseat);
//
//        List<SeatListRespDto> list = new ArrayList<SeatListRespDto>();
//
//        seatRepository.checkuser(paramsMap).forEach(seat -> {
//            list.add(seat.seatListRespDto());
//        });

        return seatRepository.checkuser(user_id);
    }
}
