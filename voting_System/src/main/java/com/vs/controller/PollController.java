package com.vs.controller;

import com.vs.entity.Option;
import com.vs.entity.Poll;
import com.vs.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/polls")
public class PollController {

    @Autowired
    private PollService pollService;

    @GetMapping("/home")
    public String home()
    {
    	return"home";
    }
    @GetMapping("/sub")
    public String home2()
    {
    	return"votecom";
    }
    @GetMapping("/create")
    public String showCreatePollForm(Model model) {
        Poll poll = new Poll();
        
        poll.getOptions().add(new Option());
        poll.getOptions().add(new Option());
        model.addAttribute("poll", poll);
        return "create_poll";
    }

    
    @PostMapping("/create")
    public String createPoll(@ModelAttribute Poll poll) {
        pollService.savePoll(poll);
        return "redirect:/polls";
    }

    
    @GetMapping
    public String listPolls(Model model) {
        model.addAttribute("polls", pollService.getAllPolls());
        return "list_polls";
    }

    
    @GetMapping("/{pollId}")
    public String viewPoll(@PathVariable Long pollId, Model model) {
        Poll poll = pollService.getPollById(pollId);
        if (poll == null) {
           
            return "redirect:/polls";
        }
        model.addAttribute("poll", poll);
        return "view_poll";
    }

    
    @PostMapping("/{pollId}/vote")
    public String vote(@PathVariable Long pollId, @RequestParam Long optionId) {
        pollService.vote(pollId, optionId);
        return "redirect:/polls/" + pollId + "/results";
    }

    
    @GetMapping("/{pollId}/results")
    public String pollResults(@PathVariable Long pollId, Model model) {
        Poll poll = pollService.getPollById(pollId);
        if (poll == null) {
         
            return "redirect:/polls";
        }
        model.addAttribute("poll", poll);
        return "poll_results";
    }
}
