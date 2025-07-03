package com.vs.entity;



import jakarta.persistence.*;

@Entity
@Table(name = "poll_option")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int votes = 0;
    private String text;

    // No need for ManyToOne if bidirectional is not needed
    @ManyToOne
    private Poll poll;
      
    
    
    
    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Poll getPoll() {
        return poll;
    }

    public void setPoll(Poll poll) {
        this.poll = poll;
    }
    
    public int getVotes() {
		return votes;
	}

	public void setVotes(int votes) {
		this.votes = votes;
	}

	public void incrementVotes() {
        this.votes++;}
}
