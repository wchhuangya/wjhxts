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

    @GetMapping("/li/a/news")
    public String news() {
        return "css/li_a_news";
    }

    @GetMapping("/float/chat")
    public String chat() {
        return "css/float_chat";
    }

    @GetMapping("/layout/beancms")
    public String beancms() {           // 仿作 beancms 网站
        return "css/layout_beancms";
    }

    @GetMapping("/pic/iconfont")
    public String iconFont() {
        return "css/pic_iconfont";
    }

    @GetMapping("/transform/translatex")
    public String translateX() {
        return "css/transform_translatex";
    }

    @GetMapping("/border/shape")
    public String shape() {
        return "css/border_shape";
    }

    @GetMapping("/box/nested")
    public String nested() {
        return "css/box_nested";
    }

    @GetMapping("/position/menu")
    public String menu() {
        return "css/position_menu";
    }

    @GetMapping("/zshe/bgplay")
    public String youkulist() {
        return "css/zshe_bgplay";
    }

    @GetMapping("/ani/study")
    public String study() {
        return "css/ani_study";
    }

    @GetMapping("/ani/loading")
    public String loading() {
        return "css/ani_loading";
    }

    @GetMapping("/ani3d/study")
    public String study3d() {
        return "css/ani3d_study";
    }

    @GetMapping("/ani3d/cube")
    public String cube3d() {
        return "css/ani3d_cube";
    }
}
