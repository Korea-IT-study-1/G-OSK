package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;
import com.Gosk.GoskProject20221221.dto.admin.UserListDto;
import com.Gosk.GoskProject20221221.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        String hashedPassword = passwordEncoder.encode(after_pw);



        map.put("user_phone", user_phone);
        map.put("after_phone", after_phone);
        map.put("after_pw", hashedPassword);

        System.out.println(map);

        return adminRepository.updateUser(map);
    }

    @Override
    public List<UserInfoList> loadUserInfoList(String user_phone) throws Exception {

        return adminRepository.loadUserInfoList(user_phone);
    }

    @Override
    public boolean usertime(int user_id) throws Exception {

        return adminRepository.usertime(user_id) > 0;
    }

    @Override
    public Object userday() throws Exception {
        LocalDateTime now = LocalDateTime.now();
        now.toString().substring(0, now.toString().lastIndexOf("."));
        adminRepository.userday(now.toString());
//        log.info("now>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>{}",now);
        return now;
    }


    public List<SalesList> salesList(int user_id) throws Exception {
        List<SalesList> salesList = adminRepository.salesList(user_id);
        return salesList;
    }
}
