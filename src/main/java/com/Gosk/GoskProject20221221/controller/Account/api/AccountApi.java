package com.Gosk.GoskProject20221221.controller.Account.api;


import com.Gosk.GoskProject20221221.aop.annotation.LogAspect;
import com.Gosk.GoskProject20221221.aop.annotation.ValidAspect;
import com.Gosk.GoskProject20221221.dto.CMRespDto;
import com.Gosk.GoskProject20221221.dto.account.RegisterReqDto;
import com.Gosk.GoskProject20221221.dto.validation.ValidationSequence;
import com.Gosk.GoskProject20221221.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/account")
@RestController
@RequiredArgsConstructor
public class AccountApi {

    private final AccountService accountService;

    @LogAspect
    @ValidAspect
    @PostMapping("/join")
    public ResponseEntity<?> register(@Validated(ValidationSequence.class) @RequestBody RegisterReqDto registerReqDto, BindingResult bindingResult) throws Exception {

//        accountService.checkDuplicatePhone(registerReqDto.getUserPhone());
        accountService.register(registerReqDto);

        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", registerReqDto));
    }

}
