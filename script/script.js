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
    e.target.textContent = vote ;
    
}
window.onload = fetchData
        

  

