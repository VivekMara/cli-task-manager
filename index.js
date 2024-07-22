const sqlite3 = require('sqlite3').verbose()
const dbpath = "db/cardata.db"

function createDB(){
    try {
        const db = new sqlite3.Database(dbpath);
        console.log("DB connection successfull")
        db.each(`SELECT * FROM 'cardata' LIMIT 10;`, (err,row) => {
            if (err){
                console.error(err)
            }
            console.log(row)
        })
    } catch (error) {
        console.error(error)
    }
}

createDB()