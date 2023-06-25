const main = document.getElementById('main');
const image = document.getElementById('images')
const votes = document.getElementById('voting')
const loader = document.querySelector('loader')
const intro = document.getElementById('intro');
const res = document.getElementById('uncheker')

const bt_stylying={
      display: "block",
      color: "white",
      width: "150px",
      backgroundColor: '#444',
      alignContent: 'center',
      height: "30px"
      }

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
       const bt = document.createElement('button') 
       bt.id=char.id;
       bt.addEventListener('click', displayAnimalDetails)
       bt.textContent="view"
       p.append(bt)
             const bt_stylying={
      display: "block",
      color: "white",
      width: "100px",
      borderRadius: '20px',
      backgroundColor: '#444',
      height: "26px"
      }

//Object.assign():
      Object.assign(bt.style, bt_stylying);
     

     }); 

}
function displayAnimalDetails(e) {
  
const id = e.target.id
  fetchAnimalData(id)      
}

function createAnimalDetail(data) {
      const head = document.createElement('h3')
      head.innerContent= 'Here is a cute random dog'
      intro.append(head)
      image.src = data.image
      votes.textContent = data.votes + "click to vote"
      votes.addEventListener('click', votingP)

      //Object.assign():
      Object.assign(votes.style, bt_stylying);
     
  

}
function votingP(e) {   

   
      let  vote = Number.parseInt(e.target.textContent) 
      if(vote===0)
      {
      vote += 1  
      e.target.textContent = vote
      }

      else if(vote===1){
      vote -= 1  
      e.target.textContent = vote
      }
      else if(vote==="click to uncheck"){
      vote=0
      }
    }




window.onload = fetchData
        

  

