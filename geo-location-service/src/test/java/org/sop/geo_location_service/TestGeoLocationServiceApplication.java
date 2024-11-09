package org.sop.geo_location_service;

import org.springframework.boot.SpringApplication;

public class TestGeoLocationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(GeoLocationServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
