import Mithril from "mithril";

Mithril.route(document.getElementById("main")!, "/", {
  "/": {
    view() {
      return <h1>Home</h1>;
    },
  },
  "/blog": {
    view() {
      return <h1>Blog</h1>;
    },
  },
  "/about": {
    view() {
      return <h1>About</h1>;
    },
  },
  "/contact": {
    view() {
      return <h1>Contact</h1>;
    },
  },
});
