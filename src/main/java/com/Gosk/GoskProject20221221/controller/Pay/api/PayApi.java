package com.Gosk.GoskProject20221221.controller.Pay.api;


import com.Gosk.GoskProject20221221.dto.*;
import com.Gosk.GoskProject20221221.service.Pay.PayService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/pay")
@RestController
@RequiredArgsConstructor
public class PayApi {

    private final PayService payService;

    @GetMapping("/loaduser")
    public ResponseEntity<?> loadUser(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        System.out.println("userPhone : " + principalDetails.getUsername());

        return ResponseEntity.ok(new CMRespDto<>(1, "success", principalDetails.getUsername()));

    }

    //결제 히스토리 등록
    @PostMapping("/history")
    public ResponseEntity<?> payHistory(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                        @RequestBody PayHistoryReqDto payHistoryReqDto) throws Exception {

        payHistoryReqDto.setUser_id(principalDetails.getUser().getUser_id());
        payService.historyadd(payHistoryReqDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "히스토리 등록 성공", payHistoryReqDto));

    }

    //결제 시 원데이 자리설정
    @PutMapping("/setseat/oneday")
    public ResponseEntity<?> setSeatOneday(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                           @RequestBody SetSeatOnedayDto setSeatOnedayDto) throws Exception{

        setSeatOnedayDto.setUser_id(principalDetails.getUser().getUser_id());
        payService.setSeatOneday(setSeatOnedayDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "원데이 자리 설정 완료", setSeatOnedayDto));
    }

    //결제 시 정액권 자리설정(시간)
    @PutMapping("/setseat/commutertime")
    public ResponseEntity<?> setSeatCommutertime(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                           @RequestBody SetSeatCommuterTimeDto setSeatCommuterTimeDto) throws Exception{

        setSeatCommuterTimeDto.setUser_id(principalDetails.getUser().getUser_id());
        payService.setSeatCommuterTime(setSeatCommuterTimeDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "정액권 시간제 자리 설정 완료", setSeatCommuterTimeDto));
    }

    //결제 시 정액권 자리설정(주)
    @PutMapping("/setseat/commuterday")
    public ResponseEntity<?> setSeatCommuterday(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                                @RequestBody SetSeatCommuterDayDto setSeatCommuterDayDto) throws Exception{

        setSeatCommuterDayDto.setUser_id(principalDetails.getUser().getUser_id());
        payService.setSeatCommuterDay(setSeatCommuterDayDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "정액권 시간제 자리 설정 완료", setSeatCommuterDayDto));
    }

    //결제 시 지정석 자리설정
    @PutMapping("/setseat/reserved")
    public ResponseEntity<?> setSeatReserved(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                           @RequestBody SetSeatReservedDto setSeatReservedDto) throws Exception{

        setSeatReservedDto.setUser_id(principalDetails.getUser().getUser_id());

        payService.setSeatReserved(setSeatReservedDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "success", setSeatReservedDto));
    }

}
