const {Pool} = require("pg");
const db_url=process.env.DATABASE_URL;
const pool = new Pool({connectionString:db_url});

function getAllMedicines(){
  //get all topics
  var sql = "select * from medicines";
  pool.query(sql, function(err,res){
    if(err){
      throw err;
    }else{
      console.log(" back form the db with: ");
      console.log(res);
      
    }
  })

  var result={medicines: [{"tylenol":1},
  {"advile":2},
  {"bilirubin":3},
  {"summer flu":4}]};
  return result;

}
function getMedicineId(num){
  var result={"great medicine":num};
  return result;
  //get all topics
}
function insertNewMedicine(name){
  //inserts to db
  var results = {succes:true}
  return results;

}
module.exports = {getMedicineId:getMedicineId,
  insertNewMedicine:insertNewMedicine,
  getAllMedicines,getAllMedicines

}