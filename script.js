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
        var urlInput = document.getElementById('uploaded-img').value,
        src =  urlInput,
        img = document.createElement('img');
       // img.src = src;
        // img.width = "500";
        img.src='/happynewyear.jpg'

    var topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;


    var bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("text-bottom").value;

   
    


listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);

//memeLi.appendChild(removeButton);


    memeForm.reset();


    });





function remove(event){
  event.target.parentNode.remove();
}


listGallery.addEventListener('click', remove, false);

});
