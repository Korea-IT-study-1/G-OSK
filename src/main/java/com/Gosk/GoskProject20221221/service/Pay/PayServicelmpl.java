package com.Gosk.GoskProject20221221.service.Pay;

import com.Gosk.GoskProject20221221.domain.PayHistory;
import com.Gosk.GoskProject20221221.dto.PayHistoryReqDto;
import com.Gosk.GoskProject20221221.repository.PayRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class PayServicelmpl implements PayService{

    private final PayRepository payRepository;

    @Override
    public void historyadd(PayHistoryReqDto payHistoryReqDto) throws Exception{

        LocalDateTime now = LocalDateTime.now();
        payHistoryReqDto.setReceipt_start_date(now.toString());

        log.info("RepositoryDto : {}", payHistoryReqDto);

        PayHistory historyEntity = payHistoryReqDto.toHistoryEntity();

        payRepository.historyadd(historyEntity);

    }
}
