import Header from "./components/Header/Header";
import Container from "./components/UI/Container";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Main from "./components/Blocks/Main/Main";


const App = () => {

    return <Container>
        <BrowserRouter>
            <Header/>
            <Main>
                <AppRouter/>
            </Main>
        </BrowserRouter>
    </Container>
}

export default App;
