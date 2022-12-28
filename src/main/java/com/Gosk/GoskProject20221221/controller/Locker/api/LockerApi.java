package com.Gosk.GoskProject20221221.controller.Locker.api;


import com.Gosk.GoskProject20221221.dto.Loker.LockerReqDto;
import com.Gosk.GoskProject20221221.service.Locker.LockerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/locker")
@RestController
@RequiredArgsConstructor
public class LockerApi {
    private final LockerService lockerService;
    @PutMapping("/check/update")
    public ResponseEntity<?> addcheck(@RequestBody LockerReqDto lockerReqDto)throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"success",lockerService.updateLocker(lockerReqDto)));
    }
}
