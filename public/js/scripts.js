const submitForm = () => {
  const formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    password: $('#password').val(),
    email: $('#email').val()
  };
  console.log("✅ Form Data Submitted:", formData);
};

const addCards = (items) => {
  $('#card-section').empty();
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

const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    } else {
      console.error("❌ Failed to fetch projects.");
    }
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();

  $('#formSubmit').click(() => {
    submitForm();
  });

  getProjects();
});
