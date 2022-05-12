package net.code.java.CompanyWharehoses;
import java.util.List;

import javax.transaction.Transactional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StoreService {
	
	@Autowired
    private StoreRepository repo;
	
	public List<Store> listAll() {
        return repo.findAll();
    }
     
    public void save(Store store) {
        repo.save(store);
    }
     
    public Store get(Integer id) {
        return repo.findById(id).get();
    }
     
    public void delete(Integer id) {
        repo.deleteById(id);
    }
}
