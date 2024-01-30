import Mithril from "mithril";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

document.querySelectorAll<HTMLAnchorElement>("a[data-route='true']").forEach((elem) => {
  elem.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (ev.metaKey) {
      window.open(this.href, "_blank");
    } else {
      Mithril.route.set(this.href, null, { title: this.innerText.trim() });
    }
  });
});

Mithril.route.prefix = "";
Mithril.route(document.getElementById("main")!, "/", {
  "/": Home,
  "/blog": Blog,
  "/about": About,
  "/contact": Contact,
});
