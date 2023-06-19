const fs = require("fs");
let colors = require("colors");
const crearArchivoTabla = async (base,listar,hasta) => {

  let salida = "";

  for (let index = 1; index <= hasta; index++) {
    salida += `${base} * ${index} = ${5 * index}\n`;
  }

  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  if(listar){
    console.log(salida.blue)
  }
  
  return base
};

module.exports = {
  crearArchivoTabla,
};
