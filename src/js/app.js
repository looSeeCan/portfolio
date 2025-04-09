import home from "./home.js";
import about from "./about.js";

//remember to build before push
const navigate = (path) => {
  switch (path) {
    case "/":
      home();

      break;
    case "/about":
      about();
      break;
    default:
      document.getElementById("content").innerHTML =
        "<h1>404 - Page Not Found</h1>";
  }
};

window.onload = () => {
  console.log(window.location.pathname);
  // home();
  navigate(window.location.pathname);
  //trying to fix heroku
};

window.onpopstate = () => {
  navigate(window.location.pathname);
};

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(window.location.pathname);

  history.pushState(null, "", "/");
  // home();
  navigate("/");
  // window.location.href = "/";
});

document.getElementById("about").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(window.location.pathname);

  history.pushState(null, "", "/about");
  navigate("/about");
  // about();
});
