package com.devfun.dao;

import java.util.List;

import com.devfun.vo.MovieVO;

public interface MovieDAO {
	
	public List<MovieVO> selectMovie() throws Exception;

	public List<MovieVO> selectByType() throws Exception;
}

