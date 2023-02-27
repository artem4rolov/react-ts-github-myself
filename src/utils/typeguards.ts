import { GithubUser } from "../types/user";

// проверяем, получили мы юзера или ошибку
export const isGithubUser = (user: any): user is GithubUser => "id" in user;
