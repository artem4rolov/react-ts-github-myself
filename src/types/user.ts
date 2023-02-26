export interface GithubUser {
  login: string;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface LocalUser {
  login: string;
  avatar: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  bio: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
}

export interface GithubError {
  message: string;
  documentation_url: string;
}
