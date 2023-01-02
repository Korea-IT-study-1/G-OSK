package com.Gosk.GoskProject20221221.controller.Time.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.service.Time.TimeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
//@RequestMapping("/api/time")
@RestController
@RequiredArgsConstructor
public class TimeApi {

    private final TimeService timeService;

    @GetMapping("/api/time/list")
    public ResponseEntity<?> getList(String listname) throws Exception{

//        if(principalDetails == null){
//            return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully", bagService.getBagList(0)));
//        }

//        User user = principalDetails.getUser();
        log.info("{}", timeService.getTimeList(listname));
        return ResponseEntity.ok(new CMRespDto<>(1, "success", timeService.getTimeList(listname)));
    }

}
