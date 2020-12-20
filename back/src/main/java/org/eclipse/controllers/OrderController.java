package org.eclipse.controllers;

import java.util.List;

import org.eclipse.models.Order;
import org.eclipse.services.IService;
import org.eclipse.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*")
public class OrderController {
	@Autowired
	private IService<Order> orderService;
	public OrderController() {
		
	}
	public OrderController(IService<Order> orderService) {
		this.orderService = orderService;
	}
	
	@RequestMapping(value = "/find", method = RequestMethod.GET, produces = "application/json")
	public List<Order> find() {
		return this.orderService.find();
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST, produces = "application/json")
	public Order add(@RequestBody Order order) {
		return this.orderService.add(order);
	}
	
	@RequestMapping(value="/update", method = RequestMethod.PUT, produces = "application/json")
	public Order update (@RequestBody Order order) {
		return this.orderService.update(order);
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.DELETE, produces = "application/json")
	public Order delete(@RequestBody Order order) {
		return this.orderService.delete(order);
	}
	
	@RequestMapping(value="/find/{id}", method = RequestMethod.GET, produces = "application/json")
	public Order findById(@PathVariable long id) {
		return this.orderService.findById(id);
	}
	
	@RequestMapping(value="/total-price/{id}", method = RequestMethod.GET, produces = "application/json")
	public double getTotalPriceOfOrder(@PathVariable long id) {
		return ((OrderService)this.orderService).getTotalPriceOfOrder(id);
	}
}
