import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { UserExample } from "./mock/userExample";
import { LocalUser } from "./types/user";

function App() {
  const user: LocalUser = UserExample;

  return (
    <Container>
      <Header />
      <Search />
      <UserCard {...user} />
    </Container>
  );
}

export default App;
