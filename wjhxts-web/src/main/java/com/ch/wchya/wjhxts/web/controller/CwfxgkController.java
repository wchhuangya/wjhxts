package com.ch.wchya.wjhxts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: 财务风险管控
 * @author: 王超
 * @create: 2020-07-16 15:27
 **/
@Controller
@RequestMapping("/cwfxgk")
public class CwfxgkController {

    @GetMapping("/index")
    public String index() {
        return "cwfxgk/index";
    }
}
