import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { UserExample } from "./mock/userExample";
import { LocalUser } from "./types/user";

function App() {
  const user: LocalUser = UserExample;

  const handleSearch = (text: string) => {};

  return (
    <Container>
      <Header />
      <Search search={handleSearch} hasError={false} />
      <UserCard {...user} />
    </Container>
  );
}

export default App;
