// Registrar nuevo estudiante
document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const studentData = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      birthplace: document.getElementById("birthplace").value,
      city: document.getElementById("city").value,
      birthdate: document.getElementById("birthdate").value,
      passport: document.getElementById("passport").value,
      language: document.getElementById("language").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
  
    localStorage.setItem("student", JSON.stringify(studentData));
    alert("Registro exitoso. Ahora inicia sesión.");
    window.location.href = "login.html";
  });
  
  // Iniciar sesión
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const student = JSON.parse(localStorage.getItem("student"));
  
    if (student.email === email && student.password === password) {
      alert("Inicio de sesión exitoso.");
      window.location.href = "student-page.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
  