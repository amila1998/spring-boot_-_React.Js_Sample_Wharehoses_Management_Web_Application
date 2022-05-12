package net.code.java.CompanyWharehoses;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {
	@Autowired
    private StockService service;
     

 @GetMapping("/stocks")
 public List<Stock> list() {
     return service.listAll();
 }
 

 @GetMapping("/stocks/{id}")
 public ResponseEntity<Stock> get(@PathVariable Integer id) {
     try {
    	 Stock stock = service.get(id);
         return new ResponseEntity<Stock>(stock, HttpStatus.OK);
     } catch (NoSuchElementException e) {
         return new ResponseEntity<Stock>(HttpStatus.NOT_FOUND);
     }      
 }
 

 @PostMapping("/addStock")
 public void add(@RequestBody Stock stock) {
     service.save(stock);
 }
 

 @PutMapping("/updateStock/{id}")
 public ResponseEntity<?> update(@RequestBody Stock stock, @PathVariable Integer id) {
     try {
    	 Stock existStock = service.get(id);
         service.save(stock);
         return new ResponseEntity<>(HttpStatus.OK);
     } catch (NoSuchElementException e) {
         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
     }      
 }
 

 @DeleteMapping("/deleteStock/{id}")
 public void delete(@PathVariable Integer id) {
     service.delete(id);
 }

}
