//package com.vs.entity;
//
//
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "poll_option")
//public class Option {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    private int votes = 0;
//    private String text;
//
//    // No need for ManyToOne if bidirectional is not needed
//    @ManyToOne
//    private Poll poll;
//      
//    
//    
//    
//    // Getters and Setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getText() {
//        return text;
//    }
//
//    public void setText(String text) {
//        this.text = text;
//    }
//
//    public Poll getPoll() {
//        return poll;
//    }
//
//    public void setPoll(Poll poll) {
//        this.poll = poll;
//    }
//    
//    public int getVotes() {
//		return votes;
//	}
//
//	public void setVotes(int votes) {
//		this.votes = votes;
//	}
//
//	public void incrementVotes() {
//        this.votes++;}
//}
package com.vs.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "poll_option")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Option text is required")
    @Size(max = 255, message = "Option text must not exceed 255 characters")
    private String text;

    private int votes = 0;

    // Removed ManyToOne to avoid bidirectional issues
    // @ManyToOne
    // private Poll poll;

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

    public int getVotes() {
        return votes;
    }

    public void setVotes(int votes) {
        if (votes < 0) {
            throw new IllegalArgumentException("Votes cannot be negative");
        }
        this.votes = votes;
    }

    public void incrementVotes() {
        this.votes++;
    }
}