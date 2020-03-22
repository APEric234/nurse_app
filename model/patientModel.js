const {Pool} = require("pg");
const db_url=process.env.DATABASE_URL;
const pool = new Pool({connectionString:db_url});

function getAllPatients(){
  //get all topics
  var sql = "select * from patients";
  pool.query(sql, function(err,res){
    if(err){
      throw err;
    }else{
      console.log(" back form the db with: ");
      console.log(res);
      //var results = {res.rows}
      //return res;
    }
  });

}
function getPatientById(num){
  var result={"billly bob":num};
  return result;
  //get all topics
}
function insertNewPatient(name){
  //inserts to db
  var results = {succes:true}
  return results;

}
module.exports = {getAllPatients:getAllPatients,
  getPatientById:getPatientById,
  insertNewPatient,insertNewPatient

}