package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Time;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TimeRepository {

    public List<Time> getTimeList(Map<String, Object> map) throws Exception;

}
