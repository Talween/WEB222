window.onload = function() {
    
    var propertyList = document.getElementById('property-list');
    
    // Clears the previous content of the property-list
    propertyList.innerHTML = '';

    for(let i = 0; i < listings.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';

        card.onclick = function() {
            window.location.href = 'property-detail.html?id=' + listings[i].id;
        };

        var image = document.createElement('img');
        image.src = listings[i].image;
        card.appendChild(image);

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        var location = document.createElement('p');
        location.innerText = listings[i].location;
        cardBody.appendChild(location);

        var price = document.createElement('p');
        price.innerText = listings[i].price;
        cardBody.appendChild(price);

        var availability = document.createElement('p');
        if (listings[i].availability === "Sold") {
            availability.className = 'availability sold';
            availability.innerText = 'Sold';
        } else {
            availability.className = 'availability';
            availability.innerText = 'Available';
        }
        cardBody.appendChild(availability);

        card.appendChild(cardBody); 
        propertyList.appendChild(card);
    }
}
