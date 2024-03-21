import Mithril, { Component } from "mithril";

const About: Component = {
  view() {
    return (
      <article class="page-content">
        <h1>About</h1>
        <div class="row fill-layout flex">
          <div>
            <img src="https://placekitten.com/200/200" alt="here, kitty kitty" />
          </div>
          <div>
            <img src="https://placekitten.com/200/200" alt="here, kitty kitty" />
          </div>
        </div>
      </article>
    );
  },
};

export default About;
