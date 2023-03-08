

var users = [ ];
function updatecsv()
{
    let converter = require('json-2-csv');
    
    let json2csvCallback = function (err, csv) 
    {
        if (err) throw err;
    };
    converter.json2csv(users, json2csvCallback);
}
function readCSVFile(file) {
    let reader = new FileReader();
    reader.onload = function() {
      let lines = reader.result.split('\n');
      lines.forEach(function(line) {
        let values = line.split(',');
        users.push(values);
      });
    };
    reader.readAsText(file);
}

  
  