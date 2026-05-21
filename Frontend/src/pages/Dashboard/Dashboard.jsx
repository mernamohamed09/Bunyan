import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import TableDashboard from "../../components/Ui/TableDasboard/TableDasboard";
import FormDashboard from "../../components/Ui/FormDashboard/FormDashboard";

function Dashboard() {

  const [drafts, setDrafts] = useState({
    users: false,
    projects: false,
    developers: false,
  });

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar drafts={drafts} />
        <main className="flex-grow-1">

          <Routes>

            <Route path="/" element={<StatusPage />} />


            <Route path="/Users" element={<Users />}>
              <Route index element={<TableDashboard header="Users" title="Add New User" />} />

              <Route path="add" element={<FormDashboard setDrafts={setDrafts} type="users" />} />
            </Route>


            <Route path="/Projects" element={<Projects />}>
              <Route index element={<TableDashboard header="Projects" title="Add New Project" />} />

              <Route path="add" element={<FormDashboard setDrafts={setDrafts} type="projects" />} />
            </Route>


            <Route path="/Developers" element={<Developers />}>
              <Route index element={<TableDashboard header="Developers" title="Add New Developer" />} />

              <Route path="add" element={<FormDashboard setDrafts={setDrafts} type="developers" />} />
            </Route>

          </Routes>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;