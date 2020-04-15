var servidor = require('http');
var direccion = require('url');
var archivos = require('fs');
const txt = 'lista.txt';

function iniciaServidor(requerido){
    var parametros = direccion.parse(requerido.url, true).query;
    var nombre = parametros.nombre;
    var trabaja = parametros.trabaja;
    var sueldo = parametros.sueldo;
    var credito = '';
    if (trabaja == 'si' && sueldo >= 1500){
        credito = 'Aprobado';
    }else{
        credito = 'No Aprobado';
    }
    var textoAdd = "Nombre:"+nombre+" "+"Trabaja:"+trabaja+" "
    +"Sueldo:"+sueldo+" "+"Credito:"+credito+"\n";

    archivos.appendFile(txt, textoAdd,function (err) {
      if (err) throw err;
      console.log('Dato Ingresado!');
    });
}
console.log('Servidor Credito Up!');
servidor.createServer(iniciaServidor).listen(9990);
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 700,
    height: 600, 
    icon: __dirname + '/img/credit.ico',
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('Formulario.html')
}

app.whenReady().then(createWindow)


