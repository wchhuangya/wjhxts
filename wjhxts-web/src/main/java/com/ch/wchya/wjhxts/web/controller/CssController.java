package com.ch.wchya.wjhxts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: css样式练习控制器
 * @author: 王超
 * @create: 2020-06-29 22:48
 **/
@Controller
@RequestMapping("/css")
public class CssController {

    @GetMapping("/form/smart")
    public String smart() {
        return "css/form_smart";
    }

    @GetMapping("/overflow/hover")
    public String overflow() {
        return "css/overflow_hover";
    }

    @GetMapping("/a/nav")
    public String nav() {
        return "css/a_nav";
    }
}
