package org.sop.timetable_service;

import org.springframework.boot.SpringApplication;

public class TestTimetableServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(TimetableServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
