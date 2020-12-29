document.addEventListener("DOMContentLoaded", function(){
    var memeForm = document.getElementById("meme-form");
    var listGallery = document.querySelector(".gallery");

memeForm.addEventListener("submit", function(event){
     event.preventDefault();

        // creating the li element

    var memeLi = document.createElement('li');
    memeLi.classList.add("meme-img");



    
    // creating the canvas element to put our img background
        var topText = document.getElementById("text-top");
        img = document.createElement('img');
        img.src = "happynewyear.jpg";
        // img.width = "500";


    var topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;


    var removeDiv = document.createElement('div');
    removeDiv.classList.add("red-cross");
    removeDiv.innerText = "X";
    removeDiv.style.color = "red";
    


listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);
memeLi.appendChild(removeDiv);
//memeLi.appendChild(removeButton);


    memeForm.reset();


    });





function remove(event){
  event.target.parentNode.remove();
}


listGallery.addEventListener('click', remove, false);

});
