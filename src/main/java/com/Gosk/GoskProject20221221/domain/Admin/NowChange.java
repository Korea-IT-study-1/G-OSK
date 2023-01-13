package com.Gosk.GoskProject20221221.domain.Admin;

import com.Gosk.GoskProject20221221.dto.NowChangeReqDto;
import com.Gosk.GoskProject20221221.dto.admin.UserListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NowChange {
    private String today;
    private int todayval;

    private String change;

    private String product;

}
