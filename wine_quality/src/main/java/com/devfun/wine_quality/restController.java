package com.devfun.wine_quality;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devfun.service.MovieService;
import com.devfun.vo.MovieVO;

@RestController
public class restController {
    
    private static final Logger logger = LoggerFactory.getLogger(restController.class);
    
    @Inject
    private MovieService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/restex")
    public List<MovieVO> movieList() throws Exception{
 
        logger.info("home");
        
        List<MovieVO> movieList = service.selectMovie();
//        List<MovieVO> groupList = service.selectByType();
        
        //model.addAttribute("movieList", movieList);
 
        return movieList;
    }

    @RequestMapping(value = "/restex2")
    public List<MovieVO> qualityList() throws Exception{
 
        logger.info("home");
        
        List<MovieVO> qualityList = service.selectByType();
//        //model.addAttribute("movieList", movieList);
// 
        return qualityList;
    }

}