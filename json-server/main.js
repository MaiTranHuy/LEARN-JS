var courseApPI = "http://localhost:3000/cost";

fetch(courseApPI)
  .then(function (response) {
    return response.json();
  })

  .then(function (courses) {
    console.log(courses)
  })
  
