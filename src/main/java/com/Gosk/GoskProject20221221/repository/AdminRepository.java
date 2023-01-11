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

    //이용권 조회
    public List<ProductList> getReservedList(Map<String, Object> map) throws Exception;
    public List<ProductList> getGeneralList(Map<String, Object> map) throws Exception;
    public List<ProductList> getLockerList(Map<String, Object> map) throws Exception;

    //이용권 등록
    public boolean getInsertPayList_oneday(OverlapChk overlapChk);
    public boolean getInsertPayList_commuter_day(OverlapChk overlapChk);
    public boolean getInsertPayList_commuter_time(OverlapChk overlapChk);
    public boolean getInsertPayList_reserved(OverlapChk overlapChk);
    public boolean getInsertPayList_locker(OverlapChk overlapChk);

    //이용권 삭제
    public int getDelPayList_oneday(DelPayList delPayList);
    public int getDelPayList_commuter_day(DelPayList delPayList);
    public int getDelPayList_commuter_time(DelPayList delPayList);
    public int getDelPayList_reserved(DelPayList delPayList);
    public int getDelPayList_locker(DelPayList delPayList);

    //이용권 중복 체크
    public boolean getOverlapChk_oneday(OverlapChk overlapChk);
    public boolean getOverlapChk_commuter_time(OverlapChk overlapChk);
    public boolean getOverlapChk_commuter_day(OverlapChk overlapChk);
    public boolean getOverlapChk_reserved(OverlapChk overlapChk);
    public boolean getOverlapChk_locker(OverlapChk overlapChk);


}
