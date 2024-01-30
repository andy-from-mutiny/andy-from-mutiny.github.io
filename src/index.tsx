import Mithril from "mithril";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

Mithril.route(document.getElementById("main")!, "/", {
  "/": Home,
  "/blog": Blog,
  "/about": About,
  "/contact": Contact,
});
