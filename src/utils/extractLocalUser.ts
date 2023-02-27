import { GithubUser, LocalUser } from "../types/user";

export const extractLocalUser = (user: GithubUser): LocalUser => ({
  // id: user.id,
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  email: user.email,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  followers: user.followers,
  following: user.following,
  location: user.location,
  repos: user.public_repos,
  twitter: user.twitter_username,
});
