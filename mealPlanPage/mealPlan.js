
/*var cardContainer = $('.cardContainer');
var submit = $('.submit-btn1');

submit.on("click", append);

function append(event) {
  event.preventDefault();
  var name = $('.mondayFood').val();

  cardContainer.append(`<div class="card-list">
      <p class="card">${name}</p>
    </div>`);
}
*/

var form1 = document.getElementById("mondayFood")
form1.addEventListener("submit", function(event){
    event.preventDefault()
})

 function add1(event) 
      {
          
            var strText = document.getElementById("textone").value;         
            document.getElementById('card-container1').textContent = strText;

        }


// cardContainer.on("click", deleteCard);

// function deleteCard() {
//   if (event.target.className === "card") {
//     event.target.parentNode.remove();
//   }  
// }


function testVariable() {

            var strText1 = document.getElementById("textone1").value;  

                  var strText2 = document.getElementById("textone2").value;        

            var strText3 = document.getElementById("textone3").value;  

                  var strText4 = document.getElementById("textone4").value; 

            document.getElementById('spanResult1').textContent = strText1;

            document.getElementById('spanResult2').textContent = strText2;           

            document.getElementById('spanResult3').textContent = strText3;

            document.getElementById('spanResult4').textContent = strText4;         
}
