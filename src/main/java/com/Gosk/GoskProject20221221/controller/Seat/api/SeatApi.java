package com.Gosk.GoskProject20221221.controller.Seat.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.SeatReqDto;
import com.Gosk.GoskProject20221221.service.Seat.SeatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/seat")
@RestController
@RequiredArgsConstructor
public class SeatApi {
    private final SeatService seatService;

    @PutMapping("/update/{user_id}")
    public ResponseEntity<?> inoutUser(@RequestBody SeatReqDto seatReqDto, @PathVariable int user_id)throws Exception {
        //수정전. 클라이언트가 보낸 데이터
        log.info("너가 보낸 데이터 정보 lockerReqDto: {} ,{}", seatReqDto, user_id);
        // 수정과정의 코드가 들어가겠지?

//        //수정코드 거쳐서 db에서 오는 데이터
//        수정코드 var tex = lockerService.updateLocker(lockerReqDto, user_id);
//        log.info("너가 보낸 데이터 정보 tex: {}", tex);
//        System.out.println("문창배");
//        System.out.println(lockerService.updateLocker( lockerReqDto, user_id));
        return ResponseEntity.ok(new CMRespDto<>(1,"success",seatService.inoutUser(seatReqDto, user_id)));
    }
}
