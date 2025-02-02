package com.vs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vs.entity.Option;

public interface OptionRepo extends JpaRepository<Option,Long> {

}
