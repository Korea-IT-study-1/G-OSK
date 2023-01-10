package com.Gosk.GoskProject20221221.domain.Admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoList {

    public String user_phone;
    public int user_id;
    public String user_out;
    public String receipt_kinds;
    public int receipt_time;
    public int receipt_day;
    public String receipt_start_date;
    public int receipt_price;




}
