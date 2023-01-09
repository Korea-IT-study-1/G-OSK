package com.Gosk.GoskProject20221221.repository;

import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
import com.Gosk.GoskProject20221221.domain.Admin.UserList;
import com.Gosk.GoskProject20221221.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.rmi.server.ExportException;
import java.util.List;
import java.util.Map;

@Mapper
public interface AdminRepository {
    public List<ProductList> getReservedList(Map<String, Object> map) throws Exception;

    public List<ProductList> getGeneralList(Map<String, Object> map) throws Exception;

    public List<UserList> loadUserList(Map<String, Object> map) throws Exception;

    public int deleteUser(String user_phone) throws Exception;

    public int updateUser(Map<String, Object> map) throws Exception;
}
