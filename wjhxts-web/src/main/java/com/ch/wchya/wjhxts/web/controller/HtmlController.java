package com.ch.wchya.wjhxts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: wjhxts
 * @description: Html 练习控制器
 * @author: 王超
 * @create: 2020-07-03 20:56
 **/
@Controller
@RequestMapping("/html")
public class HtmlController {

    @GetMapping("/hn-p/intro")
    public String intro() {
        return "html/hn-p_intro";
    }

    @GetMapping("/uloldl/menu")
    public String menu() {
        return "html/uloldl_menu";
    }

    @GetMapping("/table/course")
    public String course() {
        return "html/table_course";
    }

    @GetMapping("/form/register")
    public String register() {
        return "html/form_register";
    }
}
