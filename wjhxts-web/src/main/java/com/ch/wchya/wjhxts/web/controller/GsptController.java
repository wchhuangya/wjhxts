package com.ch.wchya.wjhxts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: 工商平台
 * @author: 王超
 * @create: 2020-07-18 13:55
 **/
@Controller
@RequestMapping("/gspt")
public class GsptController {

    @GetMapping("/index")
    public String index() {
        return "gspt/index";
    }
}
