package com.Gosk.GoskProject20221221.domain.Admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OverlapChk {
    public String name;
    public String subname;
    public String time;
    public String price;
}
