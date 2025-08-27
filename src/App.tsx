import React from "react";
import Time from "./comps/time";
import Name from "./comps/myprofil";
import ProfileCard from "./comps/ProfileCard";
import Footer from "./comps/Footer";
import "./App.css";
import "./comps/ProfileCard.css";
export default function App() {
  return (
    <>
      <header className="name">
        <Name />
      </header>
      <div className="profiles-card">
        <ProfileCard
          avatarUrl="/public/person_15450781.png"
          name="David Gavriel"
          description="ingénieur"
          typeProfile="friend"
        />
        <ProfileCard
          avatarUrl="/public/F44B0247-5983-498E-A1D5-CA1CB88B9016_1_102_a.jpeg"
          name="Yonatan Betito"
          description="Full Stack Developer"
          typeProfile="student"
        />
        <ProfileCard
          avatarUrl="/public/person_15450781.png"
          name="Moche"
          description="Full Stack Developer"
          typeProfile="teacher"
        />
        <ProfileCard
          avatarUrl="/public/person_15450781.png"
          name="Nissim"
          description="Full Stack Developer"
          typeProfile="teacher"
        />
        <ProfileCard
          avatarUrl="/public/DEA88A4F-4D51-486F-A3B2-00455CE3AC23_1_105_c.jpeg"
          name="Anaelle Betito"
          description="Children"
          typeProfile="friend"
        />
        <ProfileCard
          avatarUrl="/public/person_15450781.png"
          name="Sarah"
          description="Full Stack Developer"
          typeProfile="student"
        />
        <ProfileCard
          avatarUrl="/public/person_15450781.png"
          name="Daniel"
          description="Electrical engineer"
          typeProfile="friend"
        />
      </div>
      <div>
        <Footer />
      <div className="time">
        <Time />
      </div>
      </div>
    </>
  );
}
