package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.DelPayList;
import com.Gosk.GoskProject20221221.domain.Admin.OverlapChk;
import com.Gosk.GoskProject20221221.dto.admin.DelPayListReqDto;
import com.Gosk.GoskProject20221221.dto.admin.OverlapChkReqDto;
import com.Gosk.GoskProject20221221.dto.admin.PdListRespDto;
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
                return result != false;
            } else if(overlapChkReqDto.getSubname().equals("시간권") == true){
                boolean result = adminRepository.getOverlapChk_commuter_time(overlapChk);
                return result != false;
            } else {
                boolean result = adminRepository.getOverlapChk_commuter_day(overlapChk);
                return result != false;
            }
        } else if(overlapChkReqDto.getName().equals("지정석") == true){
            boolean result = adminRepository.getOverlapChk_reserved(overlapChk);
            return result != false;
        } else {
            boolean result = adminRepository.getOverlapChk_locker(overlapChk);
            return result != false;
        }
    }

}
