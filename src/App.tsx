import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import Loading from "./components/Loading/Loading";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { UserExample } from "./mock/userExample";
import { GithubError, GithubUser, LocalUser } from "./types/user";
import { extractLocalUser } from "./utils/extractLocalUser";
import { isGithubUser } from "./utils/typeguards";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalUser | null>(UserExample);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (text: string) => {
    setLoading(true);
    // генерим ссылку на юзера
    const url = BASE_URL + text;

    // фетчим ссылку
    const res = await fetch(url);
    // получаем данные, говорим ts что это либо GithubUser (не LocalUser), либо ошибка
    const user = (await res.json()) as GithubUser | GithubError;

    // проверяем, что юзер действительно является GithubUser
    if (isGithubUser(user)) {
      setLoading(false);
      setUser(extractLocalUser(user));
    } else {
      setLoading(false);
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search search={handleSearch} hasError={!user} />
      {loading && <Loading />}
      {user && !loading && <UserCard {...user} />}
    </Container>
  );
}

export default App;
