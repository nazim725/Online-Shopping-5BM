const searchProducts=()=>{
   fetch("https://fakestoreapi.com/products")
   .then(res=>res.json())
   .then(data=>showDetails(data))

}

const showDetails=(products)=>{
    const details=document.getElementById("display-card")

    products.forEach(element => {
        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML= `
        <div>
        Hello World
        </div>`
        details.appendChild(div);
    
   });
}








searchProducts()
