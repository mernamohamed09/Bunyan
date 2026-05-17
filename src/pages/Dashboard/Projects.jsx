 import { Outlet } from "react-router-dom";

function Projects({ setIsDraft }) {
    return (
        <section className="py-4">

            <Outlet />
        </section>
    )
}
export default Projects;