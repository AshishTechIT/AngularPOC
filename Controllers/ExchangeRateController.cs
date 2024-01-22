using Microsoft.AspNetCore.Mvc;
using AngularPOC.Models;
using System;
using System.Collections.Generic;

namespace AngularPOC.Controllers;

    [ApiController]
    [Route("[controller]")]
    public class ExchangeRateController : ControllerBase
    {
        private static List<ExchangeRate> rateList = new List<ExchangeRate>()
        {
      
        new ExchangeRate {Rate = 1.29m, CurrencyCode = "USD", ValidFromDate = DateTime.Today, ValidToDate = DateTime.Today.AddDays(1)},
        new ExchangeRate {Rate = 1.16m,CurrencyCode = "EUR", ValidFromDate = DateTime.Today,ValidToDate =DateTime.Today.AddDays(1)},
        new ExchangeRate {Rate = 1.87m, CurrencyCode = "AUD",ValidFromDate =  DateTime.Today,ValidToDate =DateTime.Today.AddDays(1)},
        };

        [HttpGet]
        public ActionResult<IEnumerable<ExchangeRate>> Get()
        {
            
            return Ok(rateList);
        }
    }
