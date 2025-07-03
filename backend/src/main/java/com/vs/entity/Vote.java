package com.vs.entity;



import jakarta.persistence.*;

@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Poll poll;
    @ManyToOne
    private Option option;
    private String voterId;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Poll getPoll() { return poll; }
    public void setPoll(Poll poll) { this.poll = poll; }
    public Option getOption() { return option; }
    public void setOption(Option option) { this.option = option; }
    public String getVoterId() { return voterId; }
    public void setVoterId(String voterId) { this.voterId = voterId; }
}