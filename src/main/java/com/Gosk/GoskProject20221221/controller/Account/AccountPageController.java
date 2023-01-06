package com.Gosk.GoskProject20221221.controller.Account;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/account")
@Controller
public class AccountPageController {

    @GetMapping("/join")
    public String join() {
        return "account_join";
    }

    @GetMapping("/login")
    public String login(Model model, @RequestParam @Nullable String error) {
        if (error != null) {
            model.addAttribute("error", error.equals("auth") ? "휴대폰 번호 또는 비밀번호가 잘못되었습니다." : "");
            return "account_join_check";
        }
        return "account_login";
    }

    @GetMapping("/joinCheck")
    public String logout() {
        return "account_join_check";
    }
}
