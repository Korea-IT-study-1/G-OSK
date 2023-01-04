package com.Gosk.GoskProject20221221.service.InOut;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.DayReqDto;
import com.Gosk.GoskProject20221221.dto.InOutReqDto;
import com.Gosk.GoskProject20221221.repository.InOutRepository;
import com.Gosk.GoskProject20221221.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class InOutServcieImpl implements InOutService{
    private final InOutRepository inOutRepository;

    @Override
    public List<User> inOut(int user_id) throws Exception {

        return inOutRepository.inOut(user_id);
    }

    @Override
    public Object out(User principalDetails) throws Exception {
        log.info("장난?/>>>>>>..: {}", principalDetails);
        LocalDateTime endtime = LocalDateTime.now();  //퇴실 시간
        LocalDateTime starttime = principalDetails.getUser_update_date();  // 입실시간

        long second = ChronoUnit.SECONDS.between(starttime, endtime);
        log.info("퇴실 입실 비교 시간>>>>>>..: {}", second);
        LocalTime user_time1 = principalDetails.getUser_time();
        LocalTime user_time2 = user_time1.minusSeconds(second);

        log.info("남은시간>>>>>>..: {}", user_time1);
        log.info("계산된시간>>>>>>>.: {}", user_time2);

        principalDetails.setUser_time2(user_time2.toString());


        inOutRepository.out(principalDetails);
        log.info("계산된시간>>>>>>>.: {}", principalDetails.getUser_time2());
        return user_time2;
    }

    @Override
    public Object day(DayReqDto dayReqDto, int user_id)throws Exception{
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now);

        LocalDateTime result = now
                .plusHours(dayReqDto.getTimehour())
                .plusMinutes(dayReqDto.getTimeminute())
                .plusSeconds(dayReqDto.getTimesecond());
        dayReqDto.setResult(result.toString().substring(0, result.toString().lastIndexOf(".")));
        dayReqDto.setNow(now.toString().substring(0, now.toString().lastIndexOf(".")));
        dayReqDto.setUser_id(user_id);

        log.info("시간보내졌움? >>>>>>>>>>>>>>>>>>>{}" ,dayReqDto.todayEntity());

         inOutRepository.day(dayReqDto.todayEntity());
        // 그럴 경우에는 핸들러로 캐치 // info 로 에러떳다고 메세지

        return result;
    }
}
