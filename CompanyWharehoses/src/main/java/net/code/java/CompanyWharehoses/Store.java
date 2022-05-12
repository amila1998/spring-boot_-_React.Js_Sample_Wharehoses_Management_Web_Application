package net.code.java.CompanyWharehoses;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
	private Integer id;
	private String store_location;
	private String store_capacity;
	
	
	public Store() {
	}
	
	public Store(Integer id, String storeLocation, String storeCapacity) {
		this.id = id;
		this.store_location = storeLocation;
		this.store_capacity = storeCapacity;
	}
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStoreLocation() {
		return store_location;
	}

	public void setStoreLocation(String storeLocation) {
		this.store_location = storeLocation;
	}

	public String getStoreCapacity() {
		return store_capacity;
	}

	public void setStoreCapacity(String storeCapacity) {
		this.store_capacity = storeCapacity;
	}
	
	
	
	
}
