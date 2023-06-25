const main = document.getElementById('main');
const image = document.getElementById('images')
const votes = document.getElementById('voting')
const loader = document.querySelector('loader')
const intro = document.getElementById('intro');
const res = document.getElementById('uncheker')
//  we are getting elements from html file 
// make them globally available


// main function
function fetchData() {
   
     fetch("http://localhost:3000/characters")
      .then(response => response.json())
        // handle the response
      .then(json => getData(json))
      //  requesting data from the server
      // ass
    
  
}
// passing the value id
function fetchAnimalData(id) {
     fetch(`http://localhost:3000/characters/${id}`)
     //
      .then(response => response.json())
      .then(json => createAnimalDetail(json)) 
}

function getData(characters) {
      // forEach iterates through an array of names 
     characters.forEach(char => {
       const p = document.createElement('p') 
       const bt = document.createElement('button') 
       // we have create variable p and assigne all the names in an array
       // we have created variable button and assigned all the id in an array
       p.textContent = char.name;
       p.id=char.id;
       p.addEventListener('click', displayAnimalDetails)
       bt.addEventListener('click', displayAnimalDetails)
       //we have added an event to names and buttuns where one can view animal
       bt.textContent="view"
       main.append(p);
       bt.id=char.id;      
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
  // this function when called displays animals
const id = e.target.id
   // e.target refers is assigns id variable with the passed value via an event
  fetchAnimalData(id)      
}

function createAnimalDetail(data) {

     
      image.src = data.image
      // this sets the image source link to that in the json file(image)
      votes.textContent = data.votes + "click to vote"
      votes.addEventListener('click', votingP)
      // assigns votes variable a value from json file 
      // add an event to it with a callback to voting
      const bt_stylying={
            display: "block",
            color: "white",
            width: "100px",
            backgroundColor: '#444',
            height: "26px"
            }
      //Object.assign():
      Object.assign(votes.style, bt_stylying);
     
  

}
function votingP(e) {   

      let  vote = Number.parseInt(e.target.textContent) 
      // e.target refers to the clicked votes element
      // we use if statement to vote by checking if the has already voted 
      // or wants to uncheck his vote
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
// loads fetch data
        

  

