// Written by victor
var movieStore = JSON.parse(localStorage.getItem("movieStore")) || [];
var addMovieBtn = document.querySelector("#addMovieBtn");
var titleInput = document.querySelector("#movieTitle");
var yearInput = document.querySelector("#movieYear");
var genreInput = document.querySelector("#movieGenre");
var cardSection = document.querySelector(".card-section");
var searchInput = document.querySelector("#moviesSearch");
function pushNotification() {
  var notificationContainer = document.querySelector("#notificationContainer");
  var notification =  document.querySelector("#notificationMessage");
  notification.innerHTML = "<p><i class='fas fa-exclamation-triangle'></i> Please fill the input below </p> ";
  notificationContainer.appendChild(notification);
  notificationContainer.style.display = "block";
  notificationContainer.classList.add("animate");
  setTimeout(() => {
    notificationContainer.classList.remove("animate");
  }, 5000);
}
addMovieBtn.addEventListener("click", () => {
  if (titleInput.value.length <= 0 || yearInput.value <= 0) {
    pushNotification();
  } else {
    function CreateMovieObject(title, year, genre) {
      this.title = title;
      this.year = year;
      this.genre = genre;
    }
    var movieDetails = new CreateMovieObject(
      titleInput.value,
      yearInput.value,
      genreInput.value
    );
    movieStore.push(movieDetails);
    localStorage.setItem("movieStore", JSON.stringify(movieStore));
    titleInput.value = "";
    yearInput.value = "";
    genreInput.value = "Action";

    renderMovies();
  }
});
renderMovies();
function renderMovies() {
  cardSection.innerHTML = "";
  movieStore.forEach((movies) => {
    var card = document.createElement("div");
    card.classList.add("card");

    switch (movies.genre) {
      case "Action":
        card.innerHTML =
          "<h3>" +
          movies.title +
          "</h3>" +
          "<p class ='movie-tag'>Year: " +
          movies.year +
          "</p>" +
          "<p class='movie-tag badge bg-primary'>Genre : " +
          movies.genre +
          "</p>" +
          "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";

        cardSection.appendChild(card);
        break;
      case "Horror":
        card.innerHTML =
          "<h3>" +
          movies.title +
          "</h3>" +
          "<p class ='movie-tag'>Year: " +
          movies.year +
          "</p>" +
          "<p class='movie-tag badge bg-danger'>Genre : " +
          movies.genre +
          "</p>" +
          "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
        cardSection.appendChild(card);
        break;
      case "Sci-fi":
        card.innerHTML =
          "<h3>" +
          movies.title +
          "</h3>" +
          "<p class ='movie-tag'>Year: " +
          movies.year +
          "</p>" +
          "<p class='movie-tag badge bg-warning'>Genre : " +
          movies.genre +
          "</p>" +
          "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
        cardSection.appendChild(card);
        break;
      case "Romance":
        card.innerHTML =
          "<h3>" +
          movies.title +
          "</h3>" +
          "<p class ='movie-tag'>Year: " +
          movies.year +
          "</p>" +
          "<p class='movie-tag badge romance'>Genre : " +
          movies.genre +
          "</p>" +
          "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
        cardSection.appendChild(card);
        break;
      case "Comedy":
        card.innerHTML =
          "<h3>" +
          movies.title +
          "</h3>" +
          "<p class ='movie-tag'>Year: " +
          movies.year +
          "</p>" +
          "<p class='movie-tag badge bg-secondary'>Genre : " +
          movies.genre +
          "</p>" +
          "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
        cardSection.appendChild(card);
        break;
      default:
    }
  });
  for (let i = 0; i < movieStore.length; i++) {
    var deleteBtn = document.querySelectorAll(".delete")[i];
    deleteBtn.addEventListener("click", () => {
      movieStore.splice(i, 1);
      localStorage.setItem("movieStore", JSON.stringify(movieStore));
      renderMovies();
    });
  }
}

searchInput.addEventListener("input", function () {
      cardSection.innerHTML = "";

  if (searchInput.value <= 0) {
    renderMovies();
  } else {
    var searchValue = searchInput.value.toLowerCase().trim();
    
    var filteredMovies = movieStore.filter((movie) => {
      var matches = movie.title.toLowerCase().includes(searchValue);
        return matches
    });
    filteredMovies.forEach(function (movies) {
      var card = document.createElement("div");
      card.classList.add("card");
      switch (movies.genre) {
        case "Action":
          card.innerHTML =
            "<h3>" +
            movies.title +
            "</h3>" +
            "<p class ='movie-tag'>Year: " +
            movies.year +
            "</p>" +
            "<p class='movie-tag badge bg-primary'>Genre : " +
            movies.genre +
            "</p>" +
            "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
          break;
        case "Horror":
          card.innerHTML =
            "<h3>" +
            movies.title +
            "</h3>" +
            "<p class ='movie-tag'>Year: " +
            movies.year +
            "</p>" +
            "<p class='movie-tag badge bg-danger'>Genre : " +
            movies.genre +
            "</p>" +
            "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
          cardSection.appendChild(card);
          break;
        case "Sci-fi":
          card.innerHTML =
            "<h3>" +
            movies.title +
            "</h3>" +
            "<p class ='movie-tag'>Year: " +
            movies.year +
            "</p>" +
            "<p class='movie-tag badge bg-warning'>Genre : " +
            movies.genre +
            "</p>" +
            "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
          cardSection.appendChild(card);
          break;
        case "Romance":
          card.innerHTML =
            "<h3>" +
            movies.title +
            "</h3>" +
            "<p class ='movie-tag'>Year: " +
            movies.year +
            "</p>" +
            "<p class='movie-tag badge romance'>Genre : " +
            movies.genre +
            "</p>" +
            "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
          cardSection.appendChild(card);
          break;
        case "Comedy":
          card.innerHTML =
            "<h3>" +
            movies.title +
            "</h3>" +
            "<p class ='movie-tag'>Year: " +
            movies.year +
            "</p>" +
            "<p class='movie-tag badge bg-secondary'>Genre : " +
            movies.genre +
            "</p>" +
            "<button class = 'btn delete btn-outline-danger'>  <i class ='fas fa-trash'></i> Delete </button> ";
      }

      cardSection.appendChild(card);
      for (let i = 0; i < filteredMovies.length; i++) {
        var deleteBtn = document.querySelectorAll(".delete")[i];
        deleteBtn.addEventListener("click", () => {
          movieStore.splice(i, 1);
          localStorage.setItem("movieStore", JSON.stringify(movieStore));
          renderMovies();
        });
      }
    });
  }
});
