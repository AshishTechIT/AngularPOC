namespace AngularPOC.Models;

    public class ExchangeRate
    {
        public decimal Rate { get; set; }
        public string CurrencyCode { get; set; }
        public DateTime ValidFromDate { get; set; }
        public DateTime ValidToDate { get; set; }
    }