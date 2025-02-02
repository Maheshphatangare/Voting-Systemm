package com.vs.service;

import com.vs.entity.Option;
import com.vs.entity.Poll;
import com.vs.repo.OptionRepo;
import com.vs.repo.PollRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollService {

    @Autowired
    private PollRepo pollRepository;

    @Autowired
    private OptionRepo optionRepository;

    public void savePoll(Poll poll) {
        for (Option option : poll.getOptions()) {
            option.setPoll(poll);
        }
        pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Poll getPollById(Long pollId) {
        return pollRepository.findById(pollId).orElse(null);
    }

    public void vote(Long pollId, Long optionId) {
        Poll poll = pollRepository.findById(pollId).orElse(null);
        if (poll != null) {
            for (Option option : poll.getOptions()) {
                if (option.getId().equals(optionId)) {
                    option.incrementVotes();
                    optionRepository.save(option);
                    break;
                }
            }
        }
    }
}
