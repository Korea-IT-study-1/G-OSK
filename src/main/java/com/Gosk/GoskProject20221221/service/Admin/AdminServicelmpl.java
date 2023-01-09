package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.UserList;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;
import com.Gosk.GoskProject20221221.dto.admin.UserListDto;
import com.Gosk.GoskProject20221221.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminServicelmpl implements AdminService {

    private final AdminRepository adminRepository;

    @Override
    public List<PdListRespDto> getPdList(String name) throws Exception{
        List<PdListRespDto> PdList = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();

        if(name.equals("지정석") == true){
            adminRepository.getReservedList(map).forEach(ProductList -> {
                PdList.add(ProductList.toRespDto());
            });
        } else {
            adminRepository.getGeneralList(map).forEach(ProductList -> {
                PdList.add(ProductList.toRespDto());
            });
        }

        return PdList;
    }

    @Override
    public List<UserListDto> loadUserList(String user_phone) throws Exception {

        List<UserListDto> userList = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();

        adminRepository.loadUserList(map).forEach(UserList -> {
            userList.add(UserList.toUserListDto());
        });

        return userList;
    }

    @Override
    public boolean deleteUser(String user_phone) throws Exception {

        return adminRepository.deleteUser(user_phone) > 1;
    }

    @Override
    public int updateUser(String user_phone, String after_phone, String after_pw) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("user_phone", user_phone);
        map.put("after_phone", after_phone);
        map.put("after_pw", after_pw);


        return adminRepository.updateUser(map);
    }


}
