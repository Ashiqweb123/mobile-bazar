const loadData=()=>{
    const searchField=document.getElementById('search-field')
   const searchText=searchField.value
   
  searchField.value =''

  const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
}
 const displayData= mobile=>
 {
    const cardContainer=document.getElementById('card-container')
    for(const mobiles of mobile)
    {
        console.log(mobiles)
        const div= document.createElement('div')
        div.innerHTML=`
        <div class="card mb-3" style="width: 15rem;">
        <img src="${mobiles.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">"${mobiles.phone_name
          }"</h5>
          <p class="card-text">"${mobiles.slug
          }"</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
        `
        cardContainer.appendChild(div) 
    }
   
 }

