(async () => {
    const containerEl = document.getElementById("containers");
    const url = "http://fakestoreapi.com/products";
    const InputMzEl = document.getElementById("InputMz");

    const fetchFunction = async () => {
       try {
        const res = await fetch(url)
        return await res.json();
  
       } catch (error) {
        console.log(error)
       }

    };

const Products = await fetchFunction()


const generateCard = (pro) =>{
return `<div class="cardMz">

<div class="imgCon"><img src="${pro.image}" alt=""></div> 
<div class="cardBodyMz">
<h2>${pro.title.split(" ").slice(0,4).join(" ")}</h2>

<h3>Description</h3>
<p>${pro.description.split(" ").slice(0,12).join(" ")}...</p>



</div>


<button id="btnMz" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">${pro.price} $$</button>


</div>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Title Name: <p>${pro.title.split(" ").slice(0,4).join(" ")}</p></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h5>Description</h5>
      <p>${pro.description.split(" ").slice(0,40).join(" ")}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Exit</button>
        <button type="button" class="btn btn-primary">${pro.price} $$</button>
      </div>
    </div>
  </div>
</div>



`;
};


const randomCardGenerate = (Products) => {

containerEl.innerHTML = "";


Products.forEach((item) => {
    
    containerEl.innerHTML += generateCard(item);

})
};


const procesorFilter = (text,search) => {

return text.toString().toLowerCase().includes(search);

}


const filterhandler = (event) => {

    const searchText = event.target.value.toLowerCase();
 
    const filterItem = Products.filter((product) => {
        return(
     procesorFilter(product.title, searchText) ||
     procesorFilter(product.price, searchText) ||
     procesorFilter(product.description, searchText)
    );
 
    })

    randomCardGenerate(filterItem);

}

InputMzEl.addEventListener("keyup",filterhandler)



randomCardGenerate(Products);








})()