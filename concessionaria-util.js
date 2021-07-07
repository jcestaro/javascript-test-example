function ehGolf(carro) {
  return new Promise (function(resolve, reject){
    if(carro == 'golf'){
      resolve(true)
    } else if(carro == undefined){
        reject("Não foi informada nenhum carro!")
      }else{
        resolve(false)
      } 
  })
}

module.exports = {
  ehGolf
};
