import "./mysass.scss";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="container">
      <div className="header">
        <ul className="navbar">
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
        <button href="#">Contact Me</button>
      </div>
      <div className="about">
        <div className="circles">
          <Circle color="#f24d1d" />
          <Circle color="#f24d1d" />
          <Circle color="#f24d1d" />
        </div>
        <div className="content">
          <p className="title">I'm Mihriban Alp.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            nesciunt sequi at eius hic architecto doloribus laborum nemo
            delectus magnam. Earum doloribus odit, voluptatem laborum
            dignissimos recusandae laboriosam maiores praesentium!
          </p>
        </div>
      </div>
      <div className="main">
        <div className="projects">
          <div className="circles">
            <Circle color="#a259ff" />
            <Circle color="#a259ff" />
            <Circle color="#a259ff" />
          </div>

          <div className="content">
            <p className="title">Projects</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur maxime quas veniam neque earum dolore, atque pariatur
              soluta cum, sed ipsam accusamus optio nesciunt ducimus tempore
              numquam est quae commodi!
            </p>
          </div>
        </div>
        <div className="blog">
          <div className="circles">
            <Circle color="#44d55c" />
            <Circle color="#44d55c" />
            <Circle color="#44d55c" />
          </div>
          <p className="title">Blog</p>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, incidunt voluptate cum qui perspiciatis nobis, porro
              sequi harum ex dolore saepe. Possimus pariatur labore blanditiis,
              non tenetur molestiae natus totam.
            </p>
          </div>
        </div>
      </div>
      <div className="contact"></div>
    </div>
  );
}

export default App;
