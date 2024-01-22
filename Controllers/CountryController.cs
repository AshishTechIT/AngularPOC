using Microsoft.AspNetCore.Mvc;
using AngularPOC.Models;
using System;
using System.Collections.Generic;

namespace AngularPOC.Controllers;

[ApiController]
[Route("[controller]")]
public class CountryController : ControllerBase
{
    private static List<Country> countryList = new List<Country>()
    {
        new Country {Name = "United States of America", CountryCode = "USA", CurrencyCode = "USD"},
        new Country {Name = "Deutschland",CountryCode = "DEU", CurrencyCode ="EUR"},
        new Country {Name = "Australia", CountryCode ="AUS", CurrencyCode ="AUD"},
    };
    [HttpGet]
     public ActionResult<IEnumerable<Country>> Get()
    {
        
    return Ok(countryList);
    }

}