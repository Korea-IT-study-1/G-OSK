package com.Gosk.GoskProject20221221.controller.Admin.api;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.service.Admin.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> updateUser(@PathVariable String user_phone, @PathVariable String after_phone, @PathVariable String user_pw) throws Exception{
        return ResponseEntity.ok(new CMRespDto<>(1, "success", null));
    }

}
