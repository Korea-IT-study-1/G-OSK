package com.Gosk.GoskProject20221221.controller.Admin;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.lang.Nullable;
@Slf4j
@RequestMapping("/admin")
@Controller
public class AdminPageController {
    @GetMapping("/userlist")
    public String userlist() {
        return "admin/userlist";
    }
    @GetMapping("/seatlist")
    public String seatlist() {
        return "admin/seatlist";
    }
    @GetMapping("/productlist")
    public String productlist() {
        return "admin/productlist";
    }

    @GetMapping("/saleslist")
    public String salesList(Model model, @RequestParam @Nullable String order_status,
                             @RequestParam @Nullable String history_start_date,
                             @RequestParam @Nullable String history_end_date) {
        log.info("사이즈333>>>>>>>>>>>>>>>>>>>>.{}",order_status + history_start_date + history_end_date);
        System.out.println(order_status + history_start_date + history_end_date);
        model.addAttribute("order_status", order_status);
        model.addAttribute("history_start_date", history_start_date);
        model.addAttribute("history_end_date", history_end_date);
        return "admin/saleslist";
    }
}
