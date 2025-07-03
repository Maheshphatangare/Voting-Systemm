package com.vs.repo;


import com.vs.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepo extends JpaRepository<Vote, Long> {
    boolean existsByPollIdAndVoterId(Long pollId, String voterId);
}