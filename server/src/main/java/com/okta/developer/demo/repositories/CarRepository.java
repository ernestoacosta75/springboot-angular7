package com.okta.developer.demo.repositories;

import com.okta.developer.demo.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * This class represents the service to manage the
 * <code>Car</code> entities.
 *
 * @CrossOrigin annotation is added to communicate with its endpoints
 * for the CRUD operations.
 */
@RepositoryRestResource
@CrossOrigin( origins = "http://localhost:4200")
public interface CarRepository extends JpaRepository<Car, Long> {

}
