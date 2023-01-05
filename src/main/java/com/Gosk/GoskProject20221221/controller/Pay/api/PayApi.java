package com.Gosk.GoskProject20221221.controller.Pay.api;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;
import com.Gosk.GoskProject20221221.dto.SetSeatDto;
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

    @PostMapping("/history")
    public ResponseEntity<?> payHistory(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                        @RequestBody PayHistoryReqDto payHistoryReqDto) throws Exception {

        payHistoryReqDto.setUser_id(principalDetails.getUser().getUser_id());

        System.out.println("Dto 확인 : {}" + payHistoryReqDto);

        payService.historyadd(payHistoryReqDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "히스토리 등록 성공", payHistoryReqDto));

    }

    @PutMapping("/setseat")
    public ResponseEntity<?> setSeat(@AuthenticationPrincipal PrincipalDetails principalDetails,@RequestBody SetSeatDto setSeatDto) throws Exception{

        setSeatDto.setUser_id(principalDetails.getUser().getUser_id());

        System.out.println("Dto 확인 : {}" + setSeatDto);

        payService.setSeat(setSeatDto);

        return ResponseEntity.ok(new CMRespDto<>(1, "success", setSeatDto));
    }


}
