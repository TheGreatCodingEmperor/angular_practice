// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

using System;
using System.Linq;


namespace UltraApp.ViewModels
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public decimal Discount { get; set; }
        public string Comments { get; set; }
    }
}
