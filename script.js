const produtos =["Maça","Banana","Leite","Pão","Café","Biscoito",]
let precoproduto = [1.5,0.5,3.2,2.5,5,4.3,] 
console.log("Preços:")

function contariteins(item){
    for (let i = 0; i< item.length; i++) {
        console.log(produtos [i],":","$",precoproduto [i]);
       
    }
     
}
contariteins(produtos)


