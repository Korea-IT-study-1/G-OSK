package com.Gosk.GoskProject20221221.service.Admin;

import com.Gosk.GoskProject20221221.domain.Admin.ProductList;
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
        } else {
            adminRepository.getGeneralList(map).forEach(ProductList -> {
                PdList.add(ProductList.toRespDto());
            });
        }

        return PdList;
    }

}
