package com.Gosk.GoskProject20221221.controller.Time.api;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/time")
@RestController
@RequiredArgsConstructor
public class TimeApi {

//    @GetMapping("/list")
//    public ResponseEntity<?> getList() throws Exception{
////        if(principalDetails == null){
////            return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully", bagService.getBagList(0)));
////        }
//
////        User user = principalDetails.getUser();
////        log.info("{}", bagService.getBagList(user.getId()));
////        return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully", bagService.getBagList(user.getId())));
//    }


}
