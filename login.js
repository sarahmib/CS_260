function login() {
    const uname = document.querySelector("#name");
    localStorage.setItem("username", uname.value);
    window.location.href = "calendar.html";
  }