const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten2.jpeg",
    link: "About Kitten 2",
    description: "This kitten enjoys finger boops and naps on laptops 🐾"
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.jpeg",
    link: "About Kitten 3",
    description: "This one brought the whole squad! 🧺😺"
  }
];

const clickMe = () => {
  
};

const submitForm = () => {
  const formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    password: $('#password').val(),
    email: $('#email').val()
  };
  console.log("Form Data Submitted:", formData);
};

const addCards = (items) => {
  items.forEach(item => {
    const cardHTML = `
      <div class="col s12 m6 l4 center-align">
        <div class="card small-card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" alt="${item.title}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}<i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $('#card-section').append(cardHTML);
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();

  $('#clickMeButton').click(clickMe);
  $('#formSubmit').click(submitForm);

  addCards(cardList);
});
const getProjects = () => {
  $.get('/api/projects',(response) => {
  if(response.statusCode==200){
  addCards(response.data);
  }
  })
  }
  
  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
    submitForm();
    })
    getProjects();
    $('.modal').modal();
    });
    