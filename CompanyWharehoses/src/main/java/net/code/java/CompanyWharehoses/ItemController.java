package net.code.java.CompanyWharehoses;
import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
 
import org.springframework.web.bind.annotation.*;
 
@RestController
public class ItemController {
	 @Autowired
	    private ItemService service;
	     
	 @CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping("/items")
	 public List<Item> list() {
	     return service.listAll();
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping("/items/{id}")
	 public ResponseEntity<Item> get(@PathVariable Integer id) {
	     try {
	         Item item = service.get(id);
	         return new ResponseEntity<Item>(item, HttpStatus.OK);
	     } catch (NoSuchElementException e) {
	         return new ResponseEntity<Item>(HttpStatus.NOT_FOUND);
	     }      
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PostMapping("/addItem")
	 public void add(@RequestBody Item item) {
	     service.save(item);
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PutMapping("/updateItem/{id}")
	 public ResponseEntity<?> update(@RequestBody Item item, @PathVariable Integer id) {
	     try {
	         Item existItem = service.get(id);
	         service.save(item);
	         return new ResponseEntity<>(HttpStatus.OK);
	     } catch (NoSuchElementException e) {
	         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	     }      
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @DeleteMapping("/deleteItem/{id}")
	 public void delete(@PathVariable Integer id) {
	     service.delete(id);
	 }
}
