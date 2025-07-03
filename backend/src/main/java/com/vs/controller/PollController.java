//package com.vs.controller;
//
//import com.vs.entity.Option;
//import com.vs.entity.Poll;
//import com.vs.service.PollService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//
//@Controller
//@CrossOrigin(origins = "http://localhost:5173")
//@RequestMapping("/polls")
//public class PollController {
//
//    @Autowired
//    private PollService pollService;
//
//    @GetMapping("/home")
//    public String home()
//    {
//    	return"home";
//    }
//    @GetMapping("/sub")
//    public String home2()
//    {
//    	return"votecom";
//    }
//    @GetMapping("/create")
//    public String showCreatePollForm(Model model) {
//        Poll poll = new Poll();
//        
//        poll.getOptions().add(new Option());
//        poll.getOptions().add(new Option());
//        model.addAttribute("poll", poll);
//        return "create_poll";
//    }
//
//    
//    @PostMapping("/create")
//    public String createPoll(@ModelAttribute Poll poll) {
//        pollService.savePoll(poll);
//        return "redirect:/polls";
//    }
//
//    
//    @GetMapping
//    public String listPolls(Model model) {
//        model.addAttribute("polls", pollService.getAllPolls());
//        return "list_polls";
//    }
//
//    
//    @GetMapping("/{pollId}")
//    public String viewPoll(@PathVariable Long pollId, Model model) {
//        Poll poll = pollService.getPollById(pollId);
//        if (poll == null) {
//           
//            return "redirect:/polls";
//        }
//        model.addAttribute("poll", poll);
//        return "view_poll";
//    }
//
//    
//    @PostMapping("/{pollId}/vote")
//    public String vote(@PathVariable Long pollId, @RequestParam Long optionId) {
//        pollService.vote(pollId, optionId);
//        return "redirect:/polls/" + pollId + "/results";
//    }
//
//    
//    @GetMapping("/{pollId}/results")
//    public String pollResults(@PathVariable Long pollId, Model model) {
//        Poll poll = pollService.getPollById(pollId);
//        if (poll == null) {
//         
//            return "redirect:/polls";
//        }
//        model.addAttribute("poll", poll);
//        return "poll_results";
//    }
//}
package com.vs.controller;

import com.vs.entity.Option;
import com.vs.entity.Poll;
import com.vs.service.PollService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
@RequestMapping("/polls")
@Validated
public class PollController {

    @Autowired
    private PollService pollService;

    // Get all polls
    @GetMapping
    public ResponseEntity<List<Poll>> listPolls() {
        try {
            List<Poll> polls = pollService.getAllPolls();
            return ResponseEntity.ok(polls);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // View a specific poll
    @GetMapping("/{pollId}")
    public ResponseEntity<Poll> viewPoll(@PathVariable @NotNull Long pollId) {
        try {
            Poll poll = pollService.getPollById(pollId);
            if (poll == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            return ResponseEntity.ok(poll);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Create a new poll
    @PostMapping("/create")
    public ResponseEntity<Poll> createPoll(@Valid @RequestBody Poll poll) {
        try {
            if (poll.getOptions() == null || poll.getOptions().size() < 2) {
                return ResponseEntity.badRequest().body(null);
            }
            for (Option option : poll.getOptions()) {
                if (option.getText() == null || option.getText().trim().isEmpty()) {
                    return ResponseEntity.badRequest().body(null);
                }
            }
            Poll savedPoll = pollService.savePoll(poll);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedPoll);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Vote on a poll
    @PostMapping("/{pollId}/vote")
    public ResponseEntity<Void> vote(
            @PathVariable @NotNull Long pollId,
            @RequestParam @NotNull Long optionId
    ) {
        try {
            boolean success = pollService.vote(pollId, optionId);
            if (!success) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Get poll results
    @GetMapping("/{pollId}/results")
    public ResponseEntity<Poll> pollResults(@PathVariable @NotNull Long pollId) {
        try {
            Poll poll = pollService.getPollById(pollId);
            if (poll == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            return ResponseEntity.ok(poll);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
 // New DELETE /polls/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePoll(@PathVariable Long id) {
        try {
            pollService.deletePoll(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    // Handle preflight OPTIONS requests
    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<Void> handleOptions() {
        return ResponseEntity.ok()
                .header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
                .header("Access-Control-Allow-Headers", "Content-Type")
                .build();
    }
}