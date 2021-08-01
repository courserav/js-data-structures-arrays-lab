// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){

    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let apDrivers = drivers
    apDrivers = [...apDrivers, name]
    return apDrivers
}

function prependDriver(name){
    let prepDrivers = drivers.slice()
    prepDrivers.unshift(name)
    return prepDrivers
}

function removeLastDriver(){
    return drivers.slice(0, -1)
}

function removeFirstDriver(){
    return drivers.slice(1)
}