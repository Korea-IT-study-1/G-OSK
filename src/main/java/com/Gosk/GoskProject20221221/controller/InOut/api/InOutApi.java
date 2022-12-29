package com.Gosk.GoskProject20221221.controller.InOut.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.service.InOut.InOutService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
//@RequestMapping("/api/inout")
@RestController
@RequiredArgsConstructor
public class InOutApi {

    private final InOutService inOutService;

    @GetMapping("/api/inout/{user_id}")
    public ResponseEntity<?> inout(@PathVariable int user_id) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"scuccess",inOutService.inOut(user_id)));
    }
}
