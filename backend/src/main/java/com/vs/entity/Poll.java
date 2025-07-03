//package com.vs.entity;
//
//import jakarta.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//public class Poll {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String question;
//    private String description;
//
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    @JoinColumn(name = "poll_id")
//    private List<Option> options = new ArrayList<>();
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
//    public String getQuestion() {
//        return question;
//    }
//
//    public void setQuestion(String question) {
//        this.question = question;
//    }
//
//    public List<Option> getOptions() {
//        return options;
//    }
//
//    public void setOptions(List<Option> options) {
//        this.options = options;
//    }
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//}
package com.vs.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Poll {
	
	
	  
	


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Question is required")
    @Size(max = 255, message = "Question must not exceed 255 characters")
    private String question;

    @Size(max = 1000, message = "Description must not exceed 1000 characters")
    private String description;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "poll_id")
    private List<Option> options = new ArrayList<>();

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Option> getOptions() {
        return options;
    }

    public void setOptions(List<Option> options) {
        this.options = options;
    }
}