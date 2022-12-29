package com.Gosk.GoskProject20221221.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Slf4j
@Aspect
@Component
public class TimerAop {

    @Pointcut("execution(* com.Gosk.GoskProject20221221.controller..*.*(..))")
    private void executionPointCut(){}

    @Around("executionPointCut()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();

        Object result = joinPoint.proceed();

        stopWatch.stop();
        log.info("class: {}, method: {} >>> {}",
                joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(),
                stopWatch.getTotalTimeSeconds());
        return result;

    }

}
