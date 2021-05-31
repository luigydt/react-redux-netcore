using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApisTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        [HttpGet]
        //Get api/Cars
        public IActionResult Get()
        {
            using (var db = new Models.CarsDBContext())
            {
                IEnumerable<Models.Car> cars = db.Cars.ToList();
                if (cars != null)
                    return Ok(cars);
            }

            return BadRequest("Cant Get Cars");
        }

        [HttpGet("{id}")]   //get car
        public IActionResult Get(string idPedido)
        {
            using (var db = new Models.CarsDBContext())
            {
                var car = db.Cars.Find(new object[] { idPedido });
                if (car != null)
                    return Ok(car);
            }
            return BadRequest("Cant get Car");
        }

        //Delete api/cars/idPedido  (delete)
        [HttpDelete("{id}")]
        public IActionResult Delete(string idPedido)
        {
            using (var db = new Models.CarsDBContext())
            {
                var car = db.Cars.Find(new object[] { idPedido });
                if (car != null)
                {
                    try
                    {
                        db.Cars.Remove(car);
                        Ok("Borrado!");
                    }
                    catch
                    {
                        return BadRequest("Cant Remove Car");
                    }

                }
                return NotFound("IdPedido not Match");
            }

        }

        //Put api/cars/id (Update)
        [HttpPut]
        public IActionResult Put([FromBody] Models.Car car)
        {
            using (var db = new Models.CarsDBContext())
            {
                var carUpdate = db.Cars.Find(new object[] { car.IdPedido });
                if (car != null)
                {
                    try
                    {
                        carUpdate.IdPedido = car.IdPedido;
                        carUpdate.Bastidor = car.Bastidor;
                        carUpdate.Modelo = car.Modelo;
                        carUpdate.Matricula = car.Matricula;
                        carUpdate.FechaEntrega = car.FechaEntrega;

                        db.Entry(carUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                        db.SaveChanges();
                        return Ok("Updated");
                    }
                    catch
                    {
                        return NotFound("Cant Updated");
                    }

                }

            }
            return BadRequest("Cant Updated");
        }
        //Post api/cars  (insert)

        [HttpPost]
        public IActionResult Post([FromBody] Models.Car car)
        {
            using (var db = new Models.CarsDBContext())
            {
                try
                {
                    Models.Car newCar = new Models.Car();
                    newCar.IdPedido = car.IdPedido;
                    newCar.Bastidor = car.Bastidor;
                    newCar.Modelo = car.Modelo;
                    newCar.Matricula = car.Matricula;
                    newCar.FechaEntrega = car.FechaEntrega;

                    db.Add(newCar);
                    db.SaveChanges();

                    return Ok("Car Inserted Correctly");
                }
                catch
                {
                    return BadRequest("Cant Insert Car");
                }

            }      

        }
    }
}
