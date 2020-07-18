package com.ch.wchya.wjhxts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: 博文尚美
 * @author: 王超
 * @create: 2020-07-17 19:49
 **/
@Controller
@RequestMapping("/bwum")
public class BwumController {

    @GetMapping("/index")
    public String index() {
        return "bwum/index";
    }
}
