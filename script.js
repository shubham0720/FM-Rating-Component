var divItems = document.getElementsByClassName("rating-button");

function clickRating(item) {
    this.clear();
    divItems[item - 1].style.backgroundColor = 'hsl(25, 97%, 53%)';
    divItems[item - 1].style.color = 'white';
    var userSelectedRating = document.querySelector('.user-selected-rating');
    userSelectedRating.innerHTML = '';
    var userRating = document.createElement('span');
    userRating.append("You selected " + item + " out of 5");
    userSelectedRating.append(userRating);
}

function clear() {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = 'hsl(213, 19%, 18%)';
        item.style.color = 'hsl(217, 12%, 63%)';
    }
}

function submitButton(){
    var ratingCard = document.getElementById("ratingCard");
    ratingCard.style.display = 'none';
    var thankyouCard = document.getElementById("thankyouCard");
    thankyouCard.style.display = 'flex';
    thankyouCard.style.justifyContent = 'space-around';
    thankyouCard.style.alignItems = 'center';
}