function normalize(item){
    const nums = parseInt(item, 10);
    return nums;
}

console.log(normalize("5000"));

function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

  console.log(normalizePort(-2000));