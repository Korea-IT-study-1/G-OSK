package com.Gosk.GoskProject20221221.controller.Admin.api;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.NowChangeReqDto;
import com.Gosk.GoskProject20221221.dto.admin.*;
import com.Gosk.GoskProject20221221.service.Admin.AdminService;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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

    @GetMapping("/loaduserlist")
    public ResponseEntity<?> loadUserList(String user_phone) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.loadUserList(user_phone)));
    }

    @DeleteMapping("/deleteuser")
    public ResponseEntity<?> deleteUser(String user_phone) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.deleteUser(user_phone)));
    }

    @PutMapping("/updateuser/{user_phone}/{after_phone}/{after_pw}")
    public ResponseEntity<?> updateUser(@PathVariable String user_phone, @PathVariable String after_phone, @PathVariable String after_pw) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.updateUser(user_phone, after_phone, after_pw)));
    }

    @GetMapping("/loaduserinfo")
    public ResponseEntity<?> loadUserInfo(String user_phone) throws Exception{

        System.out.println("userphone: " + user_phone);


        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.loadUserInfoList(user_phone)));
    }

    @GetMapping("/saleslist")
    public ResponseEntity<?> salesList(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "제품 리스트 불러오기 완료", adminService.salesList(principalDetails.getUser().getUser_id())));
    }


    @PutMapping("repairbasic")
    public ResponseEntity<?> repairBasicSeat(@RequestBody Map<String, Object> map) throws Exception{

        System.out.println(map.get("seat_id"));
        System.out.println(map.get("user_id"));


        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.repairBasicSeat(map)));
    }

    @PutMapping("repairreserved")
    public ResponseEntity<?> repairReservedSeat(@RequestBody Map<String, Object> map) throws Exception{

        System.out.println(map.get("seat_id"));
        System.out.println(map.get("user_id"));

        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.repairReservedSeat(map)));
    }


    @PutMapping("repairlocker")
    public ResponseEntity<?> repairLocker(@RequestBody Map<String, Object> map) throws Exception{

        System.out.println(map.get("seat_id"));
        System.out.println(map.get("user_id"));

        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.repairLocker(map)));
    }


    @PutMapping("exitbasic")
    public ResponseEntity<?> exitBasicSeat(@RequestBody Map<String, Object> map) throws Exception{

        System.out.println(map.get("seat_id"));
        System.out.println(map.get("user_id"));


        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.exitBasicSeat(map)));
    }


    @PutMapping("exitreserved")
    public ResponseEntity<?> exitReservedSeat(@RequestBody Map<String, Object> map) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.exitReservedSeat(map)));
    }


    @PutMapping("exitlocker")
    public ResponseEntity<?> exitLocker(@RequestBody Map<String, Object> map) throws Exception{

        System.out.println(map.get("seat_id"));
        System.out.println(map.get("user_id"));

        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.exitLocker(map)));
    }


    @PutMapping("/usertime")
    public ResponseEntity<?> usertime(@RequestBody int user_id) throws Exception{

        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.usertime(user_id)));
    }

    @PutMapping("/userday")
    public ResponseEntity<?> userday() throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.userday()));
    }


    @DeleteMapping("/listdelete")
    public ResponseEntity<?> ListDelete(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                        @RequestBody DelPayListReqDto delPayListReqDto) throws Exception{

        adminService.getDelPayList(delPayListReqDto);
        return ResponseEntity.ok(new CMRespDto<>(1, "관리자 이용권 리스트 삭제 완료", delPayListReqDto));
    }

    @PostMapping("/pdoverlapchk")
    public ResponseEntity<?> OverlapChk(@RequestBody OverlapChkReqDto overlapChkReqDto) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1,"이용권 리스트 중복 확인", adminService.getOverlapChk(overlapChkReqDto)));
    }

    @PostMapping("/upd/pdoverlapchk")
    public ResponseEntity<?> UpdOverlapChk(@RequestBody UpdOverlapChkReqDto updOverlapChkReqDto) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1,"이용권 리스트 중복 확인",
                adminService.getUpdOverlapChk(updOverlapChkReqDto)));
    }

    @PostMapping("/listinsert")
    public ResponseEntity<?> PayListInsert(@RequestBody OverlapChkReqDto overlapChkReqDto) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1,"관리자 이용권 리스트 등록 완료", adminService.getPayListInsert(overlapChkReqDto)));
    }

    @PutMapping("/listupdate")
    public ResponseEntity<?> PayListUpdate(@RequestBody UpdPayListReqDto updPayListReqDto) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1,"관리자 이용권 리스트 수정 완료", adminService.getPayListUpdate(updPayListReqDto)));
    }

    @PutMapping("/nowchange")
    public ResponseEntity<?> nowchange(@RequestBody NowChangeReqDto nowChangeReqDto) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", adminService.nowchange(nowChangeReqDto)));
    }
}
