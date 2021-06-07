//Importando o módulo Sensors e atribuindo a uma constante para acesso as funções do mesmo.
const sensors = require('./sensors.js')

/*Atribuindo o retorno da função lm393 a variável velocidade.
Exemplo atribuindo valores diferentes de minimo 15 e máximo 18
velocidade = sensors.lm393(15,18)
Os valores padrões de velocidade são min: 18 max: 25*/
velocidade = sensors.lm393()

/*Utilizando a função console.log() para exibir no terminal o retorno da função,
incrementando com uma string para facilitar a interpretação.*/
console.log('velocidade: ' + velocidade.toFixed(2))

//Atribuindo o retorno da função trc5000 a variável chave.
chave = sensors.trc5000()

//Exibindo o valor retornado da função na variável.
console.log('Switch: ' + chave)


//Atribuindo o retorno da função ldr a variável ldr.
ldr = sensors.ldr()

//Exibindo o valor retornado da função na variável.
console.log('Luz: ' + ldr)

//Atribuindo o retorno da função dht11 a variável dht11.
/*
Nesta função, é possível definir os valores limites de mínimo e máximo para velocidade e
umidade relativa, através do envio de um objeto como parametro para função.
São os atributos deste objeto: 
- minHum: valor minimo de umidade
- maxHum: valor máximo de umidade
- minTemp: valor máximo de velocidade
- maxTemp: valor minimo de velocidade
Exemplo:
case1 = {minHum: 20 , maxHum: 80, minTemp: 20, maxTemp: 25}
*/
dht11 = sensors.dht11({minHum:50, maxHum:100, minTemp: 1, maxTemp: 40})


//Exibindo o valor retornado da função na variável.

console.log('DHT11 - Umidade: ' + dht11[0])
console.log('DHT11 - velocidade: ' + dht11[1].toFixed(2))

