/* CRUD
Create: tạo mới dữ liệu -> POST
Read: lấy dữ liệu -> GET
Update: chỉnh sửa dữ liệu -> PUT/PATCH
Delete: xóa dữ liệu -> DELETE
*/
var courseAPI = "http://localhost:3000/cost";
function start() {
  getCourse(function (courses) {
    renderCourse(courses);
    handleCreateForm();
  });
}

start();

//FUNCTION
function getCourse(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseAPI, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseAPI + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function(){
        getCourse(renderCourse);
    });
}

function renderCourse(courses) {
  var listCouresBlock = document.querySelector("#list-course");ádase
  var htmls = courses.map(function (course) {
    return `
            <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        `;
  });
  listCouresBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var formData = {
      name: name,
      description: description,
    };
    createCourse(formData, function () {
      getCourse(renderCourse);
    });
  };
}
