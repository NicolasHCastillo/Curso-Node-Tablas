const colors = require('colors')

const crearArchivo = (base = 5, listar=false, hasta=10)=>{
    const fs = require('fs') 
    const line = colors.green('======================================')
    const title = colors.red.underline(`Tabla del ${base}`)
    let salida = `${line}
            ${title}
${line}\n`
    let textFile = `======================================
           Tabla del ${base}
======================================
`
    return new Promise((resolve, reject)=>{
        for(let i=1;i<=hasta;i++){
            salida += `           ${colors.blue('*')} ${base} ${colors.yellow('X')} ${i} = ${base*i}\n`;
            textFile += `           * ${base} X ${i} = ${base*i}\n`;
        }
        try{
            fs.writeFileSync(`./salida/tabla-${base}.txt`, textFile)
        }catch(e){
            reject(e)
        }
        if(listar){
            console.log(salida);
        }
        resolve(`tabla-${base}.txt`)
    })
}

module.exports = {crearArchivo}