const home = () => {
  console.log("home");
  document.getElementById("content").innerHTML = `<aside>
    <p>Welcome to my Home page</p>
  </aside>
  <section>This is a Section</section>
  `;
};

export default home;
