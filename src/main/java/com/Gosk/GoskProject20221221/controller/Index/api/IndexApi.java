package com.Gosk.GoskProject20221221.controller.Index.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.UserPayChkReqDto;
import com.Gosk.GoskProject20221221.service.Admin.AdminService;
import com.Gosk.GoskProject20221221.service.Index.IndexService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/index")
@RestController
@RequiredArgsConstructor
public class IndexApi {

    private final IndexService indexService;
    @PostMapping("/userpaychk")
    public ResponseEntity<?> UserPayChk(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                        @RequestBody UserPayChkReqDto userPayChkReqDto) throws Exception{

        userPayChkReqDto.setUser_id(principalDetails.getUser().getUser_id());

        System.out.println("test : {}" + userPayChkReqDto );
        return ResponseEntity.ok(new CMRespDto<>(1,"사용자 이용권 중복 결제 확인", indexService.getUserPayChk(userPayChkReqDto)));
    }

}
