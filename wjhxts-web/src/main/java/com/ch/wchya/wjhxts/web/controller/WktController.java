package com.ch.wchya.wjhxts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: 微课堂控制器
 * @author: 王超
 * @create: 2020-07-14 20:12
 **/
@Controller
@RequestMapping("/wkt")
public class WktController {

    @GetMapping("/index")
    public String index() {
        return "wkt/index";
    }
}
