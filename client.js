const net = require('net');
const DATA = 'data';
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.65', // IP address
    port: 50541 // Port number
  });
  conn.setEncoding("utf8");
  conn.on('connect', (connect) => {
    console.log(`Connection established!`);
    conn.write(`Name: Dav`);
    setInterval(()=>{
      conn.write('Move: up');
      conn.write('Move: right');
    },1000);
  });
  conn.on(DATA, (data) => {
    console.log('Incoming Data ...', data);
  });
return conn;

};
console.log("Connecting ...");
connect();

module.exports = connect;