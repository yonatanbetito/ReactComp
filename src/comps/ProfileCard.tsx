import React from "react";

import "./ProfileCard.css";
import Button from "./button";

type ProfileCardProps = {
  avatarUrl: string;
  name: string;
  description: string;
  typeProfile: "friend" | "teacher" | "student";
};

function ProfileCard({ avatarUrl, name, description, typeProfile }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} className="profile-card-avatar" />
      <div className="profile-card-name">{name}</div>
      <div className="profile-card-description">{description}</div>
      <Button personType={typeProfile}>{typeProfile}</Button>
    </div>
  );
}

export default ProfileCard;
