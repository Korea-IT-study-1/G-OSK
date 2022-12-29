package com.Gosk.GoskProject20221221.dto.account;

import com.Gosk.GoskProject20221221.domain.User;
import com.Gosk.GoskProject20221221.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegisterReqDto {

    @NotBlank(message= "아이디를 비워 둘 수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 11, max = 11, message = "휴대폰 번호는 11자리만 가능", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "휴대폰 번호는 숫자만 가능합니다.",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String userPhone;

    @NotBlank(message= "비밀번호를 비워 둘 수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 4, max = 4, message = "비밀번호는 4자리만 가능", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "비밀번호는 숫자만 가능합니다.",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String userPw;


    public User toUserEntity(){
        return User.builder()
                .user_phone(userPhone)
                .user_pw(new BCryptPasswordEncoder().encode(userPw))
                .build();
    }
}
