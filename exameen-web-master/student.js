// Cargar información del estudiante desde el almacenamiento local
document.addEventListener("DOMContentLoaded", () => {
    const student = JSON.parse(localStorage.getItem("student"));
  
    if (!student) {
      alert("Por favor, inicia sesión primero.");
      window.location.href = "login.html";
      return;
    }
  
    // Mostrar información del estudiante
    document.getElementById("student-name").innerText = `${student.name} ${student.surname}`;
    document.getElementById("student-language").innerText = student.language;
  
    // Mostrar otros datos personales si es necesario
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("mt-4");
    infoContainer.innerHTML = `
      <p><strong>Correo Electrónico:</strong> ${student.email}</p>
      <p><strong>Lugar de Nacimiento:</strong> ${student.birthplace}</p>
      <p><strong>Ciudad Actual:</strong> ${student.city}</p>
      <p><strong>Fecha de Nacimiento:</strong> ${student.birthdate}</p>
      <p><strong>Número de Pasaporte:</strong> ${student.passport}</p>
    `;
    document.querySelector("main").appendChild(infoContainer);
  
    // Botón para cerrar sesión
    const logoutButton = document.createElement("button");
    logoutButton.classList.add("btn", "btn-danger", "mt-3");
    logoutButton.innerText = "Cerrar Sesión";
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("student");
      alert("Has cerrado sesión exitosamente.");
      window.location.href = "login.html";
    });
    document.querySelector("main").appendChild(logoutButton);
  });
  