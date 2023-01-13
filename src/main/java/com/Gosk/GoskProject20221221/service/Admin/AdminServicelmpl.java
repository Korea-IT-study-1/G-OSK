package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.UserInfoList;
import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
import com.Gosk.GoskProject20221221.domain.Admin.SalesList;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.domain.Admin.DelPayList;
import com.Gosk.GoskProject20221221.domain.Admin.OverlapChk;
import com.Gosk.GoskProject20221221.domain.Admin.UpdOverlapChk;
import com.Gosk.GoskProject20221221.domain.Admin.UpdPayList;
import com.Gosk.GoskProject20221221.dto.admin.*;
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
        } else if(name.equals("일반석") == true){
            adminRepository.getGeneralList(map).forEach(ProductList -> {
                PdList.add(ProductList.toRespDto());
            });
        } else {
            adminRepository.getLockerList(map).forEach(ProductList -> {
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
    @Override
    public int repairBasicSeat(Map<String, Object> map) throws Exception {


        return adminRepository.repairBasicSeat(map);
    }

    @Override
    public int repairReservedSeat(Map<String, Object> map) throws Exception {


        return adminRepository.repairReservedSeat(map);
    }

    @Override
    public int repairLocker(Map<String, Object> map) throws Exception {


        return adminRepository.repairLocker(map);
    }

    @Override
    public int exitBasicSeat(Map<String, Object> map) throws Exception {

        return adminRepository.exitBasicSeat(map);
    }

    @Override
    public int exitReservedSeat(Map<String, Object> map) throws Exception {
        return adminRepository.exitReservedSeat(map);
    }

    @Override
    public int exitLocker(Map<String, Object> map) throws Exception {
        return adminRepository.exitLocker(map);
    }


    @Override
    public List<SalesList> salesList(int user_id) throws Exception {
        List<SalesList> salesList = adminRepository.salesList(user_id);
        return salesList;
    }

    @Override
    public boolean getDelPayList(DelPayListReqDto delPayListReqDto) throws Exception{

        DelPayList delPayList = delPayListReqDto.toDelListEntity();

        log.info("설정 : " + delPayListReqDto);

        if(delPayListReqDto.getProduct_name().equals("일반석") == true){
            if(delPayListReqDto.getProduct_secondname().equals("원데이") == true){
                int result = adminRepository.getDelPayList_oneday(delPayList);
                return result != 0;
            } else if(delPayListReqDto.getProduct_secondname().equals("시간권") == true){
                int result = adminRepository.getDelPayList_commuter_time(delPayList);
                return result != 0;
            } else {
                int result = adminRepository.getDelPayList_commuter_day(delPayList);
                return result != 0;
            }
        } else if(delPayListReqDto.getProduct_name().equals("지정석") == true){
            int result = adminRepository.getDelPayList_reserved(delPayList);
            return result != 0;
        } else {
            int result = adminRepository.getDelPayList_locker(delPayList);
            return result != 0;
        }
    }

    @Override
    public boolean getOverlapChk(OverlapChkReqDto overlapChkReqDto) throws Exception{
        OverlapChk overlapChk = overlapChkReqDto.toOverlapChkEntity();

        if(overlapChkReqDto.getName().equals("일반석") == true){
            if(overlapChkReqDto.getSubname().equals("원데이") == true){
                boolean result = adminRepository.getOverlapChk_oneday(overlapChk);
                return result;
            } else if(overlapChkReqDto.getSubname().equals("시간권") == true){
                boolean result = adminRepository.getOverlapChk_commuter_time(overlapChk);
                return result;
            } else {
                boolean result = adminRepository.getOverlapChk_commuter_day(overlapChk);
                return result;
            }
        } else if(overlapChkReqDto.getName().equals("지정석") == true){
            boolean result = adminRepository.getOverlapChk_reserved(overlapChk);
            return result;
        } else {
            boolean result = adminRepository.getOverlapChk_locker(overlapChk);
            return result;
        }
    }

    @Override
    public boolean getUpdOverlapChk(UpdOverlapChkReqDto updOverlapChkReqDto) throws Exception{
        UpdOverlapChk updOverlapChk = updOverlapChkReqDto.toUpdOverlapChkEntity();

        if(updOverlapChkReqDto.getName().equals("일반석") == true){
            if(updOverlapChkReqDto.getSubname().equals("원데이") == true){
                boolean result = adminRepository.getUpdOverlapChk_oneday(updOverlapChk);
                return result;
            } else if(updOverlapChkReqDto.getSubname().equals("시간권") == true){
                boolean result = adminRepository.getUpdOverlapChk_commuter_time(updOverlapChk);
                return result;
            } else {
                boolean result = adminRepository.getUpdOverlapChk_commuter_day(updOverlapChk);
                return result;
            }
        } else if(updOverlapChkReqDto.getName().equals("지정석") == true){
            boolean result = adminRepository.getUpdOverlapChk_reserved(updOverlapChk);
            return result;
        } else {
            boolean result = adminRepository.getUpdOverlapChk_locker(updOverlapChk);
            return result;
        }
    }

    @Override
    public boolean getPayListInsert(OverlapChkReqDto overlapChkReqDto) throws Exception {
        OverlapChk overlapChk = overlapChkReqDto.toOverlapChkEntity();

        if (overlapChkReqDto.getName().equals("일반석") == true) {
            if (overlapChkReqDto.getSubname().equals("원데이") == true) {
                boolean result = adminRepository.getInsertPayList_oneday(overlapChk);
                return result;
            } else if (overlapChkReqDto.getSubname().equals("시간권") == true) {
                boolean result = adminRepository.getInsertPayList_commuter_time(overlapChk);
                return result;
            } else {
                boolean result = adminRepository.getInsertPayList_commuter_day(overlapChk);
                return result;
            }
        } else if (overlapChkReqDto.getName().equals("지정석") == true) {
            boolean result = adminRepository.getInsertPayList_reserved(overlapChk);
            return result;
        } else {
            boolean result = adminRepository.getInsertPayList_locker(overlapChk);
            return result;
        }

    }
    @Override
    public boolean getPayListUpdate(UpdPayListReqDto updPayListReqDto) throws Exception{
        UpdPayList updPayList = updPayListReqDto.toUpdListEntity();

        if(updPayListReqDto.getSeat().equals("일반석") == true){
            if(updPayListReqDto.getTime().equals("원데이") == true){
                boolean result = adminRepository.getUpdatePayList_oneday(updPayList);
                return result;
            } else if(updPayListReqDto.getTime().equals("시간권") == true){
                boolean result = adminRepository.getUpdatePayList_commuter_time(updPayList);
                return result;
            } else {
                boolean result = adminRepository.getUpdatePayList_commuter_day(updPayList);
                return result;
            }
        } else if(updPayListReqDto.getSeat().equals("지정석") == true){
            boolean result = adminRepository.getUpdatePayList_reserved(updPayList);
            return result;
        } else {
            boolean result = adminRepository.getUpdatePayList_locker(updPayList);
            return result;
        }
    }

}
