
const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar.',
})
.option('l',{
    alias:'listar',
    type: 'boolean',
    default: false,
    describe:'Muestra la tabla de multiplicar por consola.',
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe: 'variable que contiene el limite a realizar la multiplicacion de la respectiva base'
})
.check((argv, option)=>{
    if(isNaN(argv.h)){
        throw 'h debe de de ser un numero'
    }else if(isNaN(argv.b)){
        throw 'b debe de de ser un numero'
    }

    return true
})
.argv

module.exports = argv