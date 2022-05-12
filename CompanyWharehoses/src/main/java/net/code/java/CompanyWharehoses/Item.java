package net.code.java.CompanyWharehoses;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Item {
	private Integer id;
	private String itemName;
	
	public Item() {
	}
	
	public Item(Integer id,String itemName) {
		this.id=id;
		this.itemName=itemName;
	}
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getitemName() {
		return itemName;
	}
	public void setitemName(String itemName) {
		this.itemName = itemName;
	}
	
	

}
