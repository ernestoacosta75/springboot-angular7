package com.okta.developer.demo.controller;

import com.okta.developer.demo.domain.Car;
import com.okta.developer.demo.repositories.CarRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class CoolCarController {
    private CarRepository carRepository;

    public CoolCarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping("/cool-cars")
    //Enabling CORS on the server
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Car> coolCars() {
        return carRepository.findAll().stream()
                .filter(this::isCool)
                .collect(Collectors.toList());
    }

    private boolean isCool(Car car) {
        return !car.getName().equalsIgnoreCase("AMC Gremlin") &&
                !car.getName().equalsIgnoreCase("Triumph Stag") &&
                !car.getName().equalsIgnoreCase("Ford Pinto") &&
                !car.getName().equalsIgnoreCase("Yugo GV");
    }
}
