package com.Gosk.GoskProject20221221.domain.Admin;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdPayList {

    public String id;
    public String seat;
    public String time;
    public String before_pdname;
    public String before_pdprice;
    public String after_pdname;
    public String after_pdprice;

}
