

if(process.env.NODE_ENV === 'production'){
   module.exports = require('./prod');
}else{
    console.log('---else----');
     module.exports = require('./dev');
}