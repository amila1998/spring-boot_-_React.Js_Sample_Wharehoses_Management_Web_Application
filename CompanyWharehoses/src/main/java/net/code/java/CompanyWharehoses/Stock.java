package net.code.java.CompanyWharehoses;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {
	private Integer id;
	private String stock_count;
	private String stock_date;
	
	
	public Stock() {}
	
	public Stock(Integer id, String stock_count, String stock_date) {
		
		this.id = id;
		this.stock_count = stock_count;
		this.stock_date = stock_date;
	}
	

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStock_count() {
		return stock_count;
	}

	public void setStock_count(String stock_count) {
		this.stock_count = stock_count;
	}

	public String getStock_date() {
		return stock_date;
	}

	public void setStock_date(String stock_date) {
		this.stock_date = stock_date;
	}
	
	
	
	

}
