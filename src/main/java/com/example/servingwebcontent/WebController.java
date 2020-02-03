package com.example.servingwebcontent;

import java.io.IOException;
import com.google.zxing.WriterException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WebController {

	@GetMapping("projects/qr")
	public String qrPage(Model model){
		model.addAttribute("qr", new Form());
		return "page/qr";
	}

	@PostMapping("projects/qr")
	public String submitQrPage(@ModelAttribute Form form){
		return "page/result";
	}
}