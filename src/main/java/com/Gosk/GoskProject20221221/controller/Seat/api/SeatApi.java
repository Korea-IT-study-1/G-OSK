package com.Gosk.GoskProject20221221.controller.Seat.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.service.Seat.SeatService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/seat")
@RestController
@RequiredArgsConstructor
public class SeatApi {
    private final SeatService seatService;
    //***********현재 사용중인 상품 가져오기***************
    @GetMapping("/check")
    public ResponseEntity<?> check(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",seatService.check(principalDetails.getUser().getUser_id())));
    }
    // *************일반석 입실****************
    @PutMapping("/update")
    public ResponseEntity<?> inoutUser(@RequestBody InOutReqDto inOutReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails)throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1,"success",seatService.inoutUser(inOutReqDto, principalDetails)));
    }
    // ***************일반석 퇴실***************
    @PutMapping("/delete")
    public ResponseEntity<?> zero(@RequestBody InOutReqDto inOutReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails)throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1,"success",seatService.zero(inOutReqDto, principalDetails)));
    }
    // ***************지정석 입실***************
    @PutMapping("/reservedupdate")
    public ResponseEntity<?> reservedinoutUser(@RequestBody InOutReqDto inOutReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails)throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1,"success",seatService.reservedinoutUser(inOutReqDto, principalDetails)));
    }
    // ***************지정석 퇴실***************
    @PutMapping("/reserveddelete")
    public ResponseEntity<?> reservedzero(@RequestBody InOutReqDto inOutReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails)throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1,"success",seatService.reservedzero(inOutReqDto, principalDetails)));
    }



//    *************************출입시 정보에따라 색 변경****************************************
    @GetMapping("/check/user")
    public ResponseEntity<?> checkuser(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", seatService.checkuser(principalDetails.getUser().getUser_id())));

    }
    @GetMapping("/check/seatuser")
    public ResponseEntity<?> seatuser(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", seatService.seatuser(principalDetails.getUser().getUser_id())));

    }

    @GetMapping("/check/locker")
    public ResponseEntity<?> seatlocker(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", seatService.seatlocker(principalDetails.getUser().getUser_id())));

    }
}
