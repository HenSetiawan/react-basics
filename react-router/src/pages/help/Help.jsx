import { NavLink, Outlet } from "react-router-dom";
function Help() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        sit, repellat ex velit eum ipsum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad aperiam
        deserunt vero aliquid soluta amet aliquam sed quidem neque! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Voluptatibus debitis harum
        maxime perspiciatis minus adipisci veniam rerum. Distinctio, voluptas
        repellat!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Help;
