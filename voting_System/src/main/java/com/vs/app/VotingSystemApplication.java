package com.vs.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableAutoConfiguration

@ComponentScan(basePackages={"com.vs.repo", "com.vs.controller","com.vs.service"})
@EnableJpaRepositories(basePackages="com.vs.repo")
//@EnableTransactionManagement
@EntityScan(basePackages={"com.vs.entity"})
@SpringBootApplication
public class VotingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(VotingSystemApplication.class, args);
	}

}
