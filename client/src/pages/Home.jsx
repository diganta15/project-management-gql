import React from "react";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <Clients />
    </>
  );
}
