using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using Npgsql;
using Spa_Test.Models;

namespace Spa_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UnitController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select name, hp, mana from  public.""Units""";
            DataTable table = new DataTable();
            string sqlDataSoure = _configuration.GetConnectionString("DevConnection");
            NpgsqlDataReader myReader;
            using(NpgsqlConnection myCon= new NpgsqlConnection(sqlDataSoure))
            {
                myCon.Open();
                using(NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }

            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Unit unit)
        {


            string query = @"
                           insert into public.""Units"" values  " ;
            DataTable table = new DataTable();
            string sqlDataSoure = _configuration.GetConnectionString("DevConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSoure))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }

            }
            return new JsonResult("Succsesfull");

        }


    }
}