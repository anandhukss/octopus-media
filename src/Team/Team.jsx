import React from "react";
import mainImg from "./sharin.png";

import "./Team.css";

function Team() {
  return (
    <div id="team" className="team-container">
      <div className="lead-container">
        <div className="lead-img">
          <img src={mainImg} height={300} width={300} alt="" />
        </div>
        <div className="lead-about">
          <div>
            <h1>Sharin KS</h1>
            <h2>Chief Creative Officer</h2>
            <div className="content">
              Digital banking platform for SMEs, startups, freelancers and more
              Create a comprehensive ecosystem to serve the needs of your SME
              and small business customers. Combine best-in-class banking with
              accounting, invoicing and bookkeeping and more. 14+ Banks are
              already using our SME Digital Banking solution.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
        className="team-members"
      >
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>

        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
      </div>
      <div className="team-members">
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>

        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
        <div>
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
        <div className="member-individual">
          <img src={mainImg} height={150} width={150} alt="" />
          <div className="member">Anandhu KS</div>
          <div className="role">Web developer</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
