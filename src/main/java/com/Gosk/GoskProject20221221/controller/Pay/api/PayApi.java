package com.Gosk.GoskProject20221221.controller.Pay.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/pay")
@RestController
@RequiredArgsConstructor
public class PayApi {

    @GetMapping("/loaduser")
    public ResponseEntity<?> loadUser(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        System.out.println("userPhone : " + principalDetails.getUsername());

        return ResponseEntity.ok(new CMRespDto<>(1, "success", principalDetails.getUsername()));

    }

}
