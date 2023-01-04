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

    @GetMapping("/api/inout")
    public ResponseEntity<?> inout(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",inOutService.inOut(principalDetails.getUser().getUser_id())));
    }

    @PutMapping("/api/inout")
    public ResponseEntity<?> out(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",inOutService.out(principalDetails.getUser())));
    }
    @PutMapping("/api/inout/day")
    public ResponseEntity<?> day(@RequestBody DayReqDto dayReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails)throws Exception {
        int user_id = principalDetails.getUser().getUser_id();

        return ResponseEntity.ok(new CMRespDto<>(1,"success",inOutService.day(dayReqDto, user_id)));
    }

}
