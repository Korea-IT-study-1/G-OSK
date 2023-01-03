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
        log.info("list : {}", timeService.getTimeList(listname));
        return ResponseEntity.ok(new CMRespDto<>(1, "이용권 불러오기 성공", timeService.getTimeList(listname)));
    }

}
