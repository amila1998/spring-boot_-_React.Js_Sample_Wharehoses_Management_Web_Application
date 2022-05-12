package net.code.java.CompanyWharehoses;


import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StoreController {
	@Autowired
    private StoreService service;
     

 @GetMapping("/stores")
 public List<Store> list() {
     return service.listAll();
 }
 

 @GetMapping("/stores/{id}")
 public ResponseEntity<Store> get(@PathVariable Integer id) {
     try {
    	 Store store = service.get(id);
         return new ResponseEntity<Store>(store, HttpStatus.OK);
     } catch (NoSuchElementException e) {
         return new ResponseEntity<Store>(HttpStatus.NOT_FOUND);
     }      
 }
 

 @PostMapping("/addStore")
 public void add(@RequestBody Store store) {
     service.save(store);
 }
 

 @PutMapping("/updateStore/{id}")
 public ResponseEntity<?> update(@RequestBody Store store, @PathVariable Integer id) {
     try {
    	 Store existStore = service.get(id);
         service.save(store);
         return new ResponseEntity<>(HttpStatus.OK);
     } catch (NoSuchElementException e) {
         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
     }      
 }
 

 @DeleteMapping("/deleteStore/{id}")
 public void delete(@PathVariable Integer id) {
     service.delete(id);
 }

}
