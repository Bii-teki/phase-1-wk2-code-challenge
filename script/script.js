const main = document.getElementById('main');
const image = document.getElementById('images')
const votes = document.getElementById('voting')

function fetchData() {
   
     fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(json => getData(json))
    
  
}
function fetchAnimalData(id) {
     fetch(`http://localhost:3000/characters/${id}`)
      .then(response => response.json())
      .then(json => createAnimalDetail(json)) 
}

function getData(characters) {
     characters.forEach(char => {
       const p = document.createElement('p') 
       p.textContent = char.name;
       p.id=char.id;
       p.addEventListener('click', displayAnimalDetails)
       main.append(p);

     }); 

   

    // const btn = document.getElementById('button')

    // btn.addEventListener('click', (e)=>{
    //   e.preventDefault();

    // let dataArray =  Object.values(characters)
    // for(i=0; i< dataArray.length; i++)
    // {
    //   console.log(characters[i])
    //   const main = document.getElementById('main');
    //   const h2 = document.createElement('h2');
    //   h2.innerHTML = char1.name;
    //     main.appendChild(h2);
    //     const li =document.createElement('li')
    //     h2.append('li')
        
    //     // const img = document.getElementById('images').src=`${char1.image}`;
    //     // li.innerContext= img;

    //     const button = document.createElement('button')
    //     button.innerText= 'Vote';
    //     main.append('button')
     
//     }
//   })
}
function displayAnimalDetails(e) {
const id = e.target.id
  fetchAnimalData(id)      
}
function createAnimalDetail(data) {
   image.src = data.image
   votes.textContent = data.votes
   votes.addEventListener('click', votingP)

}
function votingP(e) {
    let  vote = Number.parseInt(e.target.textContent)
    vote += 1
    e.target.textContent = vote;
    
}
window.onload = fetchData
        

  
//   document.addEventListener('DOMContentLoaded', function() {
//     fetchData();
//   });
