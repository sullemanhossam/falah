"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function ProfilesCell() {
  const profiles = useQuery(api.profile.get);

  if (!profiles) {
    return <div>Loading profiles...</div>;
  }

  return (
    <div>
      {profiles.map((profile: any) => (
        <div key={profile._id} className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.bio}</p>
        </div>
      ))}
    </div>
  );