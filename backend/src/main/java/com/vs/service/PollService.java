//package com.vs.service;
//
//import com.vs.entity.Option;
//import com.vs.entity.Poll;
//import com.vs.repo.OptionRepo;
//import com.vs.repo.PollRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class PollService {
//
//    @Autowired
//    private PollRepo pollRepository;
//
//    @Autowired
//    private OptionRepo optionRepository;
//
//    public void savePoll(Poll poll) {
//        for (Option option : poll.getOptions()) {
//            option.setPoll(poll);
//        }
//        pollRepository.save(poll);
//    }
//
//    public List<Poll> getAllPolls() {
//        return pollRepository.findAll();
//    }
//
//    public Poll getPollById(Long pollId) {
//        return pollRepository.findById(pollId).orElse(null);
//    }
//
//    public void vote(Long pollId, Long optionId) {
//        Poll poll = pollRepository.findById(pollId).orElse(null);
//        if (poll != null) {
//            for (Option option : poll.getOptions()) {
//                if (option.getId().equals(optionId)) {
//                    option.incrementVotes();
//                    optionRepository.save(option);
//                    break;
//                }
//            }
//        }
//    }
//}
package com.vs.service;

import com.vs.entity.Option;
import com.vs.entity.Poll;
import com.vs.entity.Vote;
import com.vs.repo.OptionRepo;
import com.vs.repo.PollRepo;
import com.vs.repo.VoteRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {

    @Autowired
    private PollRepo pollRepository;

    @Autowired
    private OptionRepo optionRepository;
    @Autowired
    private VoteRepo voteRepository;

//    @Transactional(readOnly = true)
//    public List<Poll> getAllPolls1() {
//      return pollRepository.findAll();
//    }
//
//    @Transactional(readOnly = true)
//    public Poll getPollById1(Long pollId) {
//      return pollRepository.findById(pollId)
//          .orElseThrow(() -> new IllegalArgumentException("Poll not found with ID: " + pollId));
//    }
    @Transactional
    public Poll savePoll(Poll poll) {
        if (poll.getOptions() == null || poll.getOptions().size() < 2) {
            throw new IllegalArgumentException("Poll must have at least two options");
        }
        for (Option option : poll.getOptions()) {
            if (option.getText() == null || option.getText().trim().isEmpty()) {
                throw new IllegalArgumentException("Option text cannot be empty");
            }
            // No need to set Poll explicitly, handled by JPA
        }
        return pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Poll getPollById(Long pollId) {
        return pollRepository.findById(pollId)
                .orElseThrow(() -> new IllegalArgumentException("Poll not found with ID: " + pollId));
    }
    public void deletePoll(Long id) {
        if (!pollRepository.existsById(id)) {
            throw new RuntimeException("Poll not found");
        }
        pollRepository.deleteById(id);
    }

//    @Transactional
//    public boolean vote(Long pollId, Long optionId) {
//        Optional<Poll> pollOpt = pollRepository.findById(pollId);
//        if (pollOpt.isEmpty()) {
//            return false;
//        }
//        // Check for duplicate vote (requires VoteRepository)
//        Poll poll = pollOpt.get();
//        for (Option option : poll.getOptions()) {
//            if (option.getId().equals(optionId)) {
//                option.incrementVotes();
//                pollRepository.save(poll);
//                // Save Vote entity with voterId
//                return true;
//            }
//        }
//        return false;
//    }
    @Transactional
    public boolean vote(Long pollId, Long optionId) {
      Optional<Poll> pollOpt = pollRepository.findById(pollId);
      if (pollOpt.isEmpty()) {
        return false;
      }
      Poll poll = pollOpt.get();
      for (Option option : poll.getOptions()) {
        if (option.getId().equals(optionId)) {
          option.setVotes(option.getVotes() + 1);
          pollRepository.save(poll);
          return true;
        }
      }
      return false;
    }
}