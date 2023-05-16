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
    cardContainer.textContent=''
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
          <button type="button" onclick="loadDataDetails('${mobiles.slug}')" class="btn">Details</button>
        </div>
      </div>
        `
        cardContainer.appendChild(div) 
    }
   
 }

const loadDataDetails=data=>
{
    const url=`https://openapi.programming-hero.com/api/phone/${data}`
fetch(url)
.then(res=>res.json())
.then(data=>displayDataDetails(data.data))
    
}


 const displayDataDetails= detail =>
 {
  console.log(detail)

  const cardDetails=document.getElementById('card-details')
  cardDetails.textContent=''
  const div= document.createElement('div')
  div.innerHTML=`
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${detail.image
      }" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${detail.name}</h5>
        <p class="card-text">Chipset: ${detail.mainFeatures.chipSet}</p>
        <p class="card-text">Display-Size: ${detail.mainFeatures.displaySize}</p>
        <p class="card-text">Memory: ${detail.mainFeatures.memory}</p>
        <p class="card-text"><small class="text-body-secondary">Realise Date: ${detail.releaseDate}</small></p>
      </div>
    </div>
  </div>
</div>
  `
  cardDetails.appendChild(div)
 
 }

