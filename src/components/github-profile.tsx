import { useEffect, useState } from "react";

interface GitHubProfileData {
  login: string;
  avatar_url: string;
  name: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubProfileProps {
  username: string;
}

export default function GitHubProfile({ username }: GitHubProfileProps) {
  const [profile, setProfile] = useState<GitHubProfileData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data: GitHubProfileData) => setProfile(data))
      .catch((error) => console.error("GitHub API Error:", error));
  }, [username]);

  if (!profile)
    return <p className="text-center text-gray-500 text-lg">Loading...</p>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xs mx-auto text-center border border-gray-200">
      <img
        src={profile.avatar_url}
        alt={`${profile.login} avatar`}
        className="w-24 h-24 rounded-full mx-auto shadow-md"
      />
      <h2 className="text-xl font-semibold mt-3">
        {profile.name || profile.login}
      </h2>
      <p className="text-gray-500 text-xs mt-2">
        Repositories: <span className="font-bold">{profile.public_repos}</span>
      </p>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-150 transition"
      >
        View GitHub Profile
      </a>
    </div>
  );
}
