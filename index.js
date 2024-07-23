// const sqlite3 = require('sqlite3').verbose()
// const dbpath = "db/cardata.db"

// function createDB(){
//     try {
//         const db = new sqlite3.Database(dbpath);
//         console.log("DB connection successfull")
//         db.each(`SELECT * FROM 'cardata' LIMIT 10;`, (err,row) => {
//             if (err){
//                 console.error(err)
//             }
//             console.log(row)
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }
// createDB()

// const db = require('better-sqlite3')('./db/test.db');
// const query = `
//     CREATE TABLE users (
//         id INTEGER PRIMARY KEY,
//         name STRING NOT NULL,
//         username STRING NOT NULL UNIQUE
//     )
// `;

// db.exec(query)

const {Command} = require('commander');
const db = require('better-sqlite3')('./db/tasks.db'); //load the users database
const program = new Command();

// db.exec(`
//     CREATE TABLE tasks (
//         username TEXT,
//         task TEXT
//     );
//     `);



program
    .version('1.0.0')
    .description('A simple task manager with a cli');



program
    .command('add <name> <task>')
    .description('Add a task')
    .action(
        (name,task) => {
            db.exec(`
                INSERT INTO tasks VALUES ('${name}','${task}');
                `)
        }
    );

program
    .command('get <name>')
    .description('Get the users tasks')
    .action(
        (name) => {
            console.log(db.prepare(`SELECT * FROM tasks WHERE username = ?;`).get(name))
        }
    )

program.parse(process.argv);