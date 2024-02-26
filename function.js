function incrementCount(event) {
    var button = event.target;
    var cardBody = button.closest('.card-body');
    var countElement = cardBody.querySelector('.count');
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}
