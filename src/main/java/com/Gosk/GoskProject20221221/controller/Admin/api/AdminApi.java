package com.Gosk.GoskProject20221221.controller.Admin.api;


import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.service.Admin.AdminService;
import jdk.jshell.spi.ExecutionControlProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.server.ExportException;

@Slf4j
@RequestMapping("/api/admin")
@RestController
@RequiredArgsConstructor
public class AdminApi {

    private final AdminService adminService;

    @PostMapping("/product/registration")
    public ResponseEntity<?> addProduct() throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", null));
    }

    @GetMapping("/productlist")
    public ResponseEntity<?> ProductList(String name) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "제품 리스트 불러오기 완료", adminService.getPdList(name)));
    }

//    @PutMapping("/listdelete")
//    public ResponseEntity<?> ListDelete() throws Exception{
//        setSeatCommuterDayDto.setUser_id(principalDetails.getUser().getUser_id());
//        payService.setSeatCommuterDay(setSeatCommuterDayDto);
//
//        return ResponseEntity.ok(new CMRespDto<>(1, "정액권 시간제 자리 설정 완료", setSeatCommuterDayDto));
//    }


}
