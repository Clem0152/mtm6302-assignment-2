const $imageGrid = document.getElementById('image-grid');


//Image Blocks for all of the images in the grid
const documentElements = [ 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG',  'IMG', 'IMG'
];

// Image source locations
const imageLinks = [
     'img/rockies.png', 'img/toronto.png', 'img/victoria.png', 'img/vancouver.png', 'img/quebec.png', 'img/montreal.png', 'img/epcot.png', 'img/mk.png', 'img/horse.png', 'img/ak.png', 'img/dhs.png', 'img/ottawa.png' 
];

// Descriptions for all 12 Images
const imageDesc = [
     'The Rocky Mountains as seen from Squamish, BC.', 'The CN Tower is the centerpiece of the City of Toronto!', 'A look at the marina and waterfront in Victoria, British Columbia!', 'Vancouver can be seen behind the boats at the marina at Stanley Park.', 'Le Chateau Frontenac is probably the most reconizable building in Quebec City!', 'The Olympic Rings and the Stadium that hosted the 1976 Olympic Games in Montreal!', 'Spaceship Earth is the large geodesic sphere that greets visitors to the Epcot theme part at Walt Disney World.', 'Argubly one of the most photographed buildings in the world, Cinderella Castle stands as the Icon to Magic Kingdom Park at Walt Disney World.', 'Guests take take a horse drawn carrage down Main Street U.S.A at Magic Kingdom Park!', 'Expedition Everest at Disneys Animal Kingdom stands as the largest "Mountain" in Florida despite being manmade.', 'Sorcerer Mickey welcomes guests to Disneys Hollywood Studios at Walt Disney World!', 'Parliament Hill and the Chaueau Laurier reflect off the water of the Rideau Canal in Ottawa!'
];

const imageDates = [
     'April 29th, 2019', 'August 28th, 2019', 'April 30th, 2019', 'May 1st, 2019', 'August 27th, 2019', 'August 27th, 2019', 'June 17th, 2016', 'June 18th, 2016', 'June 18th, 2016', 'June 20th, 2016', 'June 17th, 2016', 'August 1st, 2019' 
];

//New Element temporary storage
let newElement = [];

// Adding the Image and Paragraph elements to the HTML document.
for (const elementType of documentElements) {
     if (elementType === 'IMG') {
          newElement.push(`<div><img class="image-box"></img><p></p></div>`);
     }
}

const $images = document.getElementsByClassName('image-box');

$imageGrid.innerHTML = newElement.join(' ');

// Adding the image paths to the image tags so that they show up on the page.
for (let i = 0; i <12; i++) {
     const $imageBox = $imageGrid.children[i];
     $imageBox.children[0].src = imageLinks[i];
// Adding event listeners to the Images so that, when clicked, they show the image description and then when clicked again hidet he image description.
     $images[i].addEventListener('click', function (event) {
     if (event.target.classList.value === 'image-box') {
          if (event.target.parentElement.children[1].classList[0] === undefined) {
               event.target.parentElement.children[1].textContent = imageDesc[i];
               event.target.parentElement.children[1].classList.add('show-text');
          }
          else if (event.target.parentElement.children[1].classList[0] === 'show-text') {
               event.target.parentElement.children[1].textContent = ` `;
               event.target.parentElement.children[1].classList.remove('show-text');
               event.target.parentElement.children[1].classList.remove('show-date');
          }
          } 
     });
// Adding event listeners to the descriptions so that when they are clicked the photographer's name and date taken appears and when clicked again the info disappears.
     $images[i].parentElement.children[1].addEventListener('click', function (event) {
          if (event.target.classList[1] === undefined ) {
               event.target.textContent = `${imageDesc[i]} Photo Taken By: Joshua Clement on ${imageDates[i]}`;
               event.target.classList.add('show-date');
               console.log(event.target.classList);
          }
          else if (event.target.classList[1] === 'show-date') {
               event.target.textContent = imageDesc[i];
               event.target.classList.remove('show-date');
          }
     });

}



