package com.Gosk.GoskProject20221221.config;

import com.Gosk.GoskProject20221221.handler.auth.AuthFailureHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
                .antMatchers("/admin/**")
                .hasRole("ADMIN")

                .antMatchers("/index", "account/login", "account/join")
                .permitAll()

                .antMatchers("/mypage", "/time/**", "/seat/**", "/locker/**", "/pay", "/in", "/out")
//                .access("hasRole('USER') or hasRole('ADMIN')")
//                .and()
                .authenticated()



                .antMatchers("/api/**")
                .permitAll()

                .antMatchers("/static/**", "/image/**", "/download/**")
                .permitAll()

                .and()
                .formLogin()
                .usernameParameter("user_phone")
                .passwordParameter("user_pw")
                .loginPage("/account/login")
                .loginProcessingUrl("/account/login")
                .failureHandler(new AuthFailureHandler())
                .defaultSuccessUrl("/index")
        ;
    }

}
