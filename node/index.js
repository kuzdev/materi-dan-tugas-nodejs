//server
const http = require('http');
const fs = require('fs');
console.log('Buka server di :  127.0.0.1:2022 ');
http.createServer(function (req, res) {
    
    //nampilin file html-nya
    // res.writeHead(200, {'Content-Type': "text/html"});
    // fs.readFile("./index.html", null, (err, data) => {
    //     if (err) {
    //         res.writeHead(400)
    //         res.write("FILE NOT FOUND!!!")
    //     } else {
    //         res.write(data)
    //     }
    //     res.end()
    // })

    //nampilin data json-nya
    res.writeHead(200, {'Content-Type': 'application/json'});
    const jsonData = {
	status  : 200, 
        nama    : 'Kusno',
	message : 'bisaaaa xixixixi', 
    }
    console.log('HAHA :D Server Runnnnnnnnnn wuss.. wussstt......');
    res.end( JSON.stringify(jsonData)); 
    
}).listen(2022);
