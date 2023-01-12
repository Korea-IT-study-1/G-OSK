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
        LocalDateTime endtime = LocalDateTime.now();  //퇴실 시간
        LocalDateTime starttime = principalDetails.getUser_update_date();  // 입실시간

        int second = (int)ChronoUnit.SECONDS.between(starttime, endtime);

        //사용 초
        principalDetails.setUser_time2(principalDetails.getUser_time() - second);
        //퇴실 시간!!
        principalDetails.setEndtime(endtime.toString().substring(0, endtime.toString().lastIndexOf(".")));


        inOutRepository.out(principalDetails);
        return second;
    }

    @Override
    public Object day(User principalDetails)throws Exception{
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now);

        LocalDateTime result = now
                .plusSeconds(principalDetails.getUser_time());

        principalDetails.setResult(result.toString().substring(0, result.toString().lastIndexOf(".")));
        principalDetails.setNow(now.toString().substring(0, now.toString().lastIndexOf(".")));
//        dayReqDto.setUser_id(user_id);
//
//         inOutRepository.day(dayReqDto.todayEntity());
        // 그럴 경우에는 핸들러로 캐치 // info 로 에러떳다고 메세지
        inOutRepository.day(principalDetails);
        return result;
    }
    @Override
    public Object inoutcheck(User principalDetails) throws Exception {
        LocalDateTime endtime = LocalDateTime.now();  //퇴실 시간

        principalDetails.setEndtime(endtime.toString().substring(0, endtime.toString().lastIndexOf(".")));


        inOutRepository.inoutcheck(principalDetails);
        return endtime;
    }
}
