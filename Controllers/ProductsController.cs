using Microsoft.AspNetCore.Mvc;
using AngularPOC.Models;
using System;
using System.Collections.Generic;

namespace AngularPOC.Controllers;


[Route("[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private static List<Product> productList = new List<Product>()
    {
        new Product {Id = 1, name = "T-shirt", description = "Mens t-shirt, size medium", price = 19.99m, currency = "GBP"},
        new Product {Id = 2, name = "Jeans", description = "Womens jeans, size small", price = 19.99m, currency = "GBP"},
        new Product {Id = 3, name = "Hat", description = "Summer hat, one size", price = 19.99m, currency = "GBP"},
        new Product {Id = 4, name = "Coat", description = "Unisex winter jacket, size large", price = 19.99m, currency = "GBP"},
        new Product {Id = 5, name = "Trainers", description = "Womens fashion footwear, size 37", price = 19.99m, currency = "GBP"}
    };
    [HttpGet]
    public ActionResult<IEnumerable<Product>> Get()
    {
        
    return Ok(productList);
    }

    [HttpPut("convertPrice/{id}")]
    public ActionResult<Product> ConvertPrice(int id, [FromQuery] string newCurrency, [FromQuery] decimal exchangeRate)
    {
        Product product = productList.Find(p => p.Id == id);
        if (product == null)
        {
            return NotFound();
        }
        decimal result = product.price * exchangeRate;
        
        product.price = result;

        return Ok(product);
    }   

}