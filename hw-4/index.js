import { writeFile } from 'fs';
import { readFile } from 'fs';
import { appendFile } from 'fs';
import { unlink } from 'fs';

writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err)=>{
    if(err) console.log(err);
    console.log("write a json is successfull")
});


readFile('employees.json', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });

  appendFile('employees.json', '{"name": "emp2", "salary": 7000}', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

  unlink('employees.json', (err) => {
    if (err) throw err;
    console.log('employees.json was deleted');
  });