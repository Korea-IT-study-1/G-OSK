package com.Gosk.GoskProject20221221.dto.admin;

import com.Gosk.GoskProject20221221.domain.Admin.OverlapChk;
import com.Gosk.GoskProject20221221.domain.Admin.UpdOverlapChk;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdOverlapChkReqDto {
    private String name;
    private String subname;
    private String before_time;
    private String after_time;

    public UpdOverlapChk toUpdOverlapChkEntity() {
        return UpdOverlapChk.builder()
                .name(name)
                .subname(subname)
                .before_time(before_time)
                .after_time(after_time)
                .build();
    }
}
