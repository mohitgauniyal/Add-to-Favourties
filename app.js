
//select all the cards
all_cards = document.querySelectorAll('.card--nanodegree');

// select the title part of the card
all_cards_titles = document.querySelectorAll('.card--nanodegree__title');

//loop over each title
for(let i=0;i<all_cards_titles.length; i++){

  //create a button to add under title
  const button = document.createElement('div');
  button.textContent = "Add to Favorites";

  //can add many classes in this button
  button.classList.add('button--primary');

  //add the button next/under each title
  all_cards_titles[i].appendChild(button);

  //add click even listner to each button
  all_cards_titles[i].addEventListener('click', function (event) {
    
    // prevent the defaut event of opening the link
    event.preventDefault();

    //select the button div to add child div to it later
    const button = all_cards_titles[i].querySelector('div');
    if(button.textContent === 'Add to Favorites'){
      button.textContent = 'Remove from Favourites';
      const stars = document.createElement('div');
      stars.innerText="⭐⭐⭐";
      button.appendChild(stars);
    }
    else
      button.innerText = 'Add to Favorites';{
    }
  });

}