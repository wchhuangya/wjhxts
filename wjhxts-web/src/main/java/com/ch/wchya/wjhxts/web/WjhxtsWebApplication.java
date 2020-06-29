package com.ch.wchya.wjhxts.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @program: wjhxts
 * @description: 入口类
 * @author: 王超
 * @create: 2020-06-27 11:53
 **/
@SpringBootApplication(scanBasePackages = "com.ch.wchya.wjhxts")
public class WjhxtsWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(WjhxtsWebApplication.class, args);
    }
}
