import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ drafts = {} })  {

  const links = [
    { icon: "fa-chart-line", title: "Status", path: "/" },
    { icon: "fa-users", title: "User Management", path: "/Users" },
    { icon: "fa-building", title: "Project Management", path: "/Projects" },
    { icon: "fa-building", title: "Developers Management", path: "/Developers" },
    { icon: "fa-globe", title: "CMS", path: "/CMS" },
    { icon: "fa-message", title: "Live chat", path: "/Livechat" },
  ];

  return (
    <aside className={`min-vh-100 py-4 ${styles.sidebar}`}>
      <div className="px-4 fw-semibold fs-4 mb-3">
        Dashboards
      </div>

      <nav>
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={`${styles.navItem} py-4 px-3 d-flex align-items-center gap-3`}
          >
            <i className={`fa-solid ${item.icon} ${styles.icon}`}></i>

            <div className="d-flex align-items-center gap-2">

              <span className={styles.linkTitle}>
                {item.title}
              </span>

              {item.title === "User Management" && drafts.users && (
                <span className="badge bg-danger">Draft</span>
              )}

              {item.title === "Project Management" && drafts.projects && (
                <span className="badge bg-danger">Draft</span>
              )}

              {item.title === "Developers Management" && drafts.developers && (
                <span className="badge bg-danger">Draft</span>
              )}

            </div>

          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;