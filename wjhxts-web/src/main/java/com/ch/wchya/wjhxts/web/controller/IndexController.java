package com.ch.wchya.wjhxts.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: 首页控制器
 * @author: 王超
 * @create: 2020-06-27 11:56
 **/
@Controller
@RequestMapping("/")
public class IndexController {

    public static final Logger log = LoggerFactory.getLogger(IndexController.class);

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/cp")
    public String cp() {
        return "cp";
    }
}
