export const waiting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resuleto')
    }, 5000)

})
// waiting.then(mensaje => console.log(mensaje))


export const applyDiscount = new Promise((resolve, reject) => {
    const discount = false
    if(discount){
        resolve('Descuento aplicado')
    } else {
        reject('No se ha podido aplicar descuento')
    }
})

applyDiscount
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
