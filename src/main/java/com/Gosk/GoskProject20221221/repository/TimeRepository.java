package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Time;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TimeRepository {
    public List<Time> getOnedayList(Map<String, Object> map) throws Exception;
    public List<Time> getCoummuterList(Map<String, Object> map) throws Exception;
    public List<Time> getReservedList(Map<String, Object> map) throws Exception;
    public List<Time> getLockerList(Map<String, Object> map) throws Exception;
}
