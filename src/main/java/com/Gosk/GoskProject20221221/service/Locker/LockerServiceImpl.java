package com.Gosk.GoskProject20221221.service.Locker;

import com.Gosk.GoskProject20221221.dto.Locker.LockerReqDto;
import com.Gosk.GoskProject20221221.repository.LockerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class LockerServiceImpl implements LockerService {

    private final LockerRepository lockerRepository;
//  -------------------입실/퇴실---------------------------
    @Override
    public boolean updateLocker(LockerReqDto lockerReqDto, int user_id)throws Exception{
        log.info("실패햇어요!!!!!!!!!!!!!!! : {}, {} ", lockerReqDto,user_id);


        LocalDateTime now = LocalDateTime.now();

        LocalDateTime finalTime = now.plusHours(3);


        return lockerRepository.updateLocker(lockerReqDto.toLockerEntity(user_id)) > 0;
    }
}
//        if(lockerRepository.updateLocker(lockerReqDto.toLockerEntity(user_id)) == 0){
//                //에러로 옮긴다
//                log.info("실패햇어요!!!!!!!!!!!!!!!");
//                };
//
//                log.info("성공햇을때 수정된 값: {}" dwwfd);
//
//                return dwwfd;
