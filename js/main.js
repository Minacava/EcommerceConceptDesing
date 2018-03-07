class loadProducts {
  constructor(data) {
     this.s1 = document.getElementById("section1");
     this.data = data;
   
   
     console.log(data)
  }
     
   showImg(){
      for (let product of this.data){
            let div1 = document.createElement ("div");
            div1.classList.add("divContaner","div1");
           
            let name = document.createElement("h3");
            name.innerHTML = product.name;
            div1.appendChild(name);

            let pic = document.createElement("img");
            pic.setAttribute("src", product.pic); 
            pic.classList.add("img-fluid","customimg");
            div1.appendChild(pic);
            
           
        
         for (let spec in product.specification){
         
            let specification = document.createElement("li");
            specification.innerHTML = spec  +" "+  product.specification[spec];
            div1.appendChild(specification);
          }
            let price = document.createElement("p");
            price.innerHTML = product.price;
            div1.appendChild(price);

            let boton = document.createElement("button");
            boton.type = "button";
            boton.classList.add("botonCustom",);
            div1.appendChild(boton);
            boton.innerHTML = "Comprar"

            this.s1.appendChild(div1);
            boton.addEventListener("click", function(){
            boton.classList.toggle("botoncustom2");
            });
      }
   }
}


function loadJson(){
    let jsonUrl = "https://gist.githubusercontent.com/Minacava/54af14dabf840a99645ff4c1a3e156e4/raw/3009115e98bd125c8e778fe7870f99ba564d17a7/gistfile1.txt"

    fetch(jsonUrl).then(function(response){
      return response.json()
    }).then(function(data){
        let myProducts = new loadProducts(data);
        myProducts.showImg();
    })
}
let data = loadJson();



