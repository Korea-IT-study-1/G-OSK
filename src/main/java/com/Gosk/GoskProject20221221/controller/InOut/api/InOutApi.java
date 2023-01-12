package com.Gosk.GoskProject20221221.controller.InOut.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.DayReqDto;
import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.service.InOut.InOutService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
//@RequestMapping("/api/inout")
@RestController
@RequiredArgsConstructor
public class InOutApi {

    private final InOutService inOutService;
    //*****************유저 정보 가져오기**************************
    @GetMapping("/api/inout")
    public ResponseEntity<?> inout(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        log.info("junho>>>>>>>>>>>>>>>>>>>>>>>>>>>,{}",principalDetails.getUser());

        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",inOutService.inOut(principalDetails.getUser().getUser_id())));
    }
    //*******************퇴실*********************
    @PutMapping("/api/inout")
    public ResponseEntity<?> out(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",inOutService.out(principalDetails.getUser())));
    }
    // ****************남은시간 int변경값 서버로 전달후 변경***********************   
    @PutMapping("/api/inout/day")
    public ResponseEntity<?> day(@AuthenticationPrincipal PrincipalDetails principalDetails)throws Exception {
//        int user_id = principalDetails.getUser().getUser_id();

        return ResponseEntity.ok(new CMRespDto<>(1,"success",inOutService.day(principalDetails.getUser())));
    }
    @PutMapping("/api/inout/check")
    public ResponseEntity<?> inoutcheck(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        log.info("inoutcheck>>>>>>>>>>>>>>>>>>>>>>>>>>>,{}",principalDetails.getUser());
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",inOutService.inoutcheck(principalDetails.getUser())));
    }


}
