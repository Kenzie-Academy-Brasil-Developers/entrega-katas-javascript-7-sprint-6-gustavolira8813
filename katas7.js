//arrays e funções para testes dos métodos
let arr = [1,2,3,4,5,6,7,8,9]
let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = [1,2,3,4,5,6,7,8,9]
let arr3 = [1,2,3,4,5,6,7,8,9]
let arr4 = [1,'a',3,'f',5,6,7,8,9]
let arr5 = [1,2,3,4,5,6,7,8,9]
let arr6 = [1,2,3,4,5,6,7,8,9]
let arr7 = [1,2,3,4,5,6,7,8,9]
let arr8 = [1,1,1,1,1]
let arr9 = [2,2,2,2,2,2]
let arr10 = [1,2,3,4,[5,6,7,[8,9,0,[1,2,4,[5,6,7]]]]]

function isNumber(element, index, arr){
    console.log(`${element} é um número`)
}
function double(element){
    return element * 2
}
function isEven(element, index, arr){
    return element%2 === 0
}
function isString(element, index, arr){
    if(typeof(element) === 'string'){
        return true
    }
}
function addArr(a, b){
    return a + b
}

//1-forEach()
function newForEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
    }
}

let retornoForEach = arr2.forEach(isNumber)
let retornoNewForEach = newForEach(arr2, isNumber)


//2-fill()
function newFill(arr, valor, inicio = 0, fim = arr.length){
    let output = arr
    for(let i = inicio; i < fim; i++){
        output[i] = valor
    }
    return output
}

let retornoFill = arr3.fill(98,3,7)
let retornoNewFill = newFill(arr3, 98, 3, 7)

console.log(retornoFill)
console.log(retornoNewFill)

//3-map()
function newMap(arr, callback){
    let output = []
    for(let i = 0; i < arr.length; i++){
        output.push(callback(arr[i]))
    }
    return output
}
let retornoMap = arr5.map(double)
let retornoNewMap = newMap(arr5, double)

console.log(retornoMap)
console.log(retornoNewMap)

//4-some()
function newSome(arr, callback){
    let resposta = false
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            resposta = true
        }
    }
    return resposta
}

let retornoSome = arr3.some(isString)
let retornoNewSome = newSome(arr3, isString)

console.log(retornoSome)
console.log(retornoNewSome)

//5-find()
function newFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return arr[i]
        }
    }
}

let retornoFind = arr4.find(isString)
let retornoNewFind = newFind(arr4, isString)

console.log(retornoFind)
console.log(retornoNewFind)

//6-findIndex()
function newFindIndex(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i
        }
    }
}

let retornoFindIndex = arr4.findIndex(isString)
let retornoNewFindIndex = newFindIndex(arr4, isString)

console.log(retornoFindIndex)
console.log(retornoNewFindIndex)

//7-every()
function newEvery(arr, callback){
    let resposta = true
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)){
            resposta = false
        }
    }
    return resposta
}

let retornoEvery = arr4.every(isEven)
let retornoNewEvery = newEvery(arr4, isEven)

console.log(retornoEvery)
console.log(retornoNewEvery)

//8-filter()
function newFilter(arr, callback){
    let output = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            output.push(arr[i])
        }
    }
    return output
}

let retornoFilter = arr5.filter(isEven)
let retornoNewFilter = newFilter(arr5, isEven)

console.log(retornoFilter)
console.log(retornoNewFilter)

//9-concat()
function newConcat(arr1, arr2){
    let output = []
    for(let i = 0; i < arr1.length; i++){
        output.push(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        output.push(arr2[i])
    }
    return output
}

let retornoConcat = arr1.concat(arr4)
let retornoNewConcat = newConcat(arr1, arr4)

console.log(retornoConcat)
console.log(retornoNewConcat)

//10-include()
function newInclude(arr, elemento, indexI = 0){
    let resposta = false
    for(let i = indexI; i < arr.length; i++){
        if(elemento === arr[i]){
            resposta = true
        }
    }
    return resposta
}

let retornoInclude = arr1.includes(100)
let retornoNewInclude = newInclude(arr1, 100)

console.log(retornoInclude)
console.log(retornoNewInclude)

//11-indexOf
function newIndexOf(arr, elemento, indexI = 0){
    for(let i = indexI; i < arr.length; i++){
        if(arr[i] === elemento){
            return i
        }
    }
    return -1
}

let retornoIndexOf = arr1.indexOf(1)
let retornoNewIndexOf = newIndexOf(arr1, 1)

console.log(retornoIndexOf)
console.log(retornoNewIndexOf)

//12-join()
function newJoin(arr, elemento =''){
    let output = ''
    for(let i = 0; i < (arr.length - 1); i++){
        output += arr[i] + `${elemento}`
    }
    return output + arr[arr.length -1]  
}

let retornoJoin = arr1.join('^^')
let retornoNewJoin = newJoin(arr, '^^' )

console.log(retornoJoin)
console.log(retornoNewJoin)

//13-reduce()
function newReduce(arr, callback, valorI = 0){
   let total = valorI
    for(let i = 0; i < arr.length; i++){
        total = callback(total, arr[i], i, arr)
    }
    return total
}

let retornoReduce = arr9.reduce(addArr)
let retornoNewReduce = newReduce(arr9, addArr)

console.log(retornoReduce)
console.log(retornoNewReduce)

//14-slice()
function newSlice(arr, indexI = 0, indexF = arr.length){
    let output = []
    for(let i = indexI; i < indexF; i++){
        output.push(arr[i])
    }
    return output
}
let retornoSlice = arr1.slice(2,5)
let retornoNewSlice = newSlice(arr1,2,5)

