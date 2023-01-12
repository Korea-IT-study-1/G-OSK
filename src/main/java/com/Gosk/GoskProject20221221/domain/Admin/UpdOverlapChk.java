package com.Gosk.GoskProject20221221.domain.Admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdOverlapChk {
    public String name;
    public String subname;
    public String before_time;
    public String after_time;
}
