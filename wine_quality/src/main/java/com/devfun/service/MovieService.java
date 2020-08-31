package com.devfun.service;

import java.util.List;

import com.devfun.vo.MovieVO;

public interface MovieService {
	
	 public List<MovieVO> selectMovie() throws Exception;
	 
	 public List<MovieVO> selectByType() throws Exception;
}
