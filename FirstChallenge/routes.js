const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Welcome to my App!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form>');
        res.write('<button type=""></button>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
}

module.exports = requestHandler;