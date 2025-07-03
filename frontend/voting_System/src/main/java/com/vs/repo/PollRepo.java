package com.vs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vs.entity.Poll;


public interface PollRepo extends JpaRepository<Poll,Long>
{
	

}