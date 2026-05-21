 import { Outlet } from "react-router-dom";

function Developers({ Drafts }) {
    return (
        <section className="py-4" >

            <Outlet />
        </section>
    )
}
export default Developers;