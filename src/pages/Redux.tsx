import { Link, Outlet } from "react-router-dom";

const Redux = () => {
  return (
    <div className="page">
      <section className="redux-navbar">
        <aside className="redux-side-nav">
          <nav className="redux-nav">
            <ul>
              <li>
                <Link to="/redux">Counter</Link>
              </li>
              <li>
                <Link to="/redux/todo">Todo</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <article className="redux-content">
          <Outlet />
        </article>
      </section>
    </div>
  );
};

export default Redux;
