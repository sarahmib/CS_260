function login() {
    const uname = document.querySelector("#name");
    localStorage.setItem("username", uname.value);
    const events = {};
    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "calendar.html";
  }