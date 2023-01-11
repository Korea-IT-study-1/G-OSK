package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Admin.DelPayList;
import com.Gosk.GoskProject20221221.domain.Admin.OverlapChk;
import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
import org.apache.ibatis.annotations.Mapper;

import java.rmi.server.ExportException;
import java.util.List;
import java.util.Map;

@Mapper
public interface AdminRepository {
    public List<ProductList> getReservedList(Map<String, Object> map) throws Exception;
    public List<ProductList> getGeneralList(Map<String, Object> map) throws Exception;
    public List<ProductList> getLockerList(Map<String, Object> map) throws Exception;

    public int getDelPayList_oneday(DelPayList delPayList);
    public int getDelPayList_commuter_day(DelPayList delPayList);
    public int getDelPayList_commuter_time(DelPayList delPayList);
    public int getDelPayList_reserved(DelPayList delPayList);
    public int getDelPayList_locker(DelPayList delPayList);
    public boolean getOverlapChk_oneday(OverlapChk overlapChk);
    public boolean getOverlapChk_commuter_time(OverlapChk overlapChk);
    public boolean getOverlapChk_commuter_day(OverlapChk overlapChk);
    public boolean getOverlapChk_reserved(OverlapChk overlapChk);
    public boolean getOverlapChk_locker(OverlapChk overlapChk);
}
