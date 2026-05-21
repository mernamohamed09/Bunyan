import { Outlet } from "react-router-dom";

function Users({ Drafts }) {
    return (
        <section className="py-4">
        
            <Outlet />
        </section>
    )
}
export default Users;