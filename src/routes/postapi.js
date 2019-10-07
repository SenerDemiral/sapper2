export function post(req, res, next) {
    console.log('--------------');
    console.log(req.path, req.url, req.method);
    console.log(req.body);
    //console.log(req.body.data);
    let body = '';
    res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(req.body));

/*
    req.on('data', chunk => {
        console.log(chunk);
        body += chunk.toString();
    }).on('end', () => {
        let bodyJson = JSON.parse(body);
        console.log(bodyJson);
    });

    req.on('end', () => {
        let data = JSON.parse(body);
        console.log(data);

    });
*/    
    //const article = req.json();
}