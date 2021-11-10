import NavBar from "./components/nav-bar/NavBar";
import { Container } from "@theme-ui/components";
import Content from "./components/content/Content";
function App() {
  return (
    <Container sx={{
      maxWidth: '1280px',
      padding: ["28px 0px", null, "28px 0px", "7px 0px"]
    }}>
      <NavBar/>
      <Content/>
    </Container>
  );
}

export default App;
