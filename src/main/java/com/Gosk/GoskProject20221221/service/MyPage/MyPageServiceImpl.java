package com.Gosk.GoskProject20221221.service.MyPage;

import com.Gosk.GoskProject20221221.domain.MyPage;
import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.repository.MyPageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService{

    private final MyPageRepository myRepository;
    @Override
    public List<MyPage> receipt(int user_id) throws Exception {
        return myRepository.receipt(user_id);
    }
}
