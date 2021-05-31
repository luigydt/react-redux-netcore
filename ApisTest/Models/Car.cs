using System;
using System.Collections.Generic;

#nullable disable

namespace ApisTest.Models
{
    public partial class Car
    {
        public string IdPedido { get; set; }
        public string Bastidor { get; set; }
        public string Modelo { get; set; }
        public string Matricula { get; set; }
        public string FechaEntrega { get; set; }
    }
}
