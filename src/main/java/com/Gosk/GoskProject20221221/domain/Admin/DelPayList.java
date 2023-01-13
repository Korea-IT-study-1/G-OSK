package com.Gosk.GoskProject20221221.domain.Admin;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DelPayList {

    public int product_id;
    public String product_name;
    public String product_secondname;

}
