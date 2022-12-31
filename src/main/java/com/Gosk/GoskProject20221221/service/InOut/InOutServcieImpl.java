package com.Gosk.GoskProject20221221.service.InOut;


import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.repository.InOutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InOutServcieImpl implements InOutService{
    private final InOutRepository inOutRepository;

    @Override
    public List<User> inOut(int user_id) throws Exception {
        LocalDateTime time = LocalDateTime.now();
        LocalDateTime now = LocalDateTime.now();

        Long hour = ChronoUnit.HOURS.between(now, time);
        Long minute = ChronoUnit.MINUTES.between(now, time);


        return inOutRepository.inOut(user_id);
    }

    @Override
    public boolean out(int user_id) throws Exception {

        return inOutRepository.out(user_id) > 0;
    }
}
