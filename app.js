console.clear()
const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar')

// const base = 1


const {base, listar, hasta} = argv

crearArchivo(base, listar, hasta)
.then(file => console.log(file, 'creado'))
.catch(err => console.log(err))