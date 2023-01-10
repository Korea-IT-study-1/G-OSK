package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import org.apache.ibatis.annotations.Mapper;

import java.rmi.server.ExportException;
import java.util.List;
import java.util.Map;

@Mapper
public interface AdminRepository {
    public List<ProductList> getReservedList(Map<String, Object> map) throws Exception;

    public List<ProductList> getGeneralList(Map<String, Object> map) throws Exception;

    public List<SalesList> salesList(int user_id) throws Exception;
}
