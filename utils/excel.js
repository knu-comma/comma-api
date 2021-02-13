var json2xlsx = require('node-json-xlsx');
var fs = require('fs');

export function jsonToXlsx(){
    var json = require('../students.json')
    var xlsx = json2xlsx(json);
    fs.writeFileSync('data.xlsx', xlsx, 'binary');
}

export default {
    jsonToXlsx,
}
