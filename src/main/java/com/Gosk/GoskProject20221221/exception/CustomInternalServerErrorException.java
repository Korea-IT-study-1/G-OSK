package com.Gosk.GoskProject20221221.exception;

public class CustomInternalServerErrorException extends RuntimeException {

    public CustomInternalServerErrorException(String message){
        super(message);
    }

}
