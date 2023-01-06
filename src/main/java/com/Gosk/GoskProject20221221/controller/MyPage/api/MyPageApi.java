package com.Gosk.GoskProject20221221.controller.MyPage.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.service.MyPage.MyPageService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/mypage")
@RestController
@RequiredArgsConstructor
public class MyPageApi {
    private final MyPageService myPageService;
    @GetMapping("/receipt/all")
    public ResponseEntity<?> receipt(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",myPageService.receipt(principalDetails.getUser().getUser_id())));
    }

    @GetMapping("/receipt/today")
    public ResponseEntity<?> receiptToday(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",myPageService.receipt(principalDetails.getUser().getUser_id())));
    }

    @GetMapping("/receipt/month")
    public ResponseEntity<?> receiptMonth(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",myPageService.receipt(principalDetails.getUser().getUser_id())));
    }

    @GetMapping("/receipt/month3")
    public ResponseEntity<?> receiptMonth3(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",myPageService.receipt(principalDetails.getUser().getUser_id())));
    }
}
