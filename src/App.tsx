import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import DetailPage from "./components/Detail";
import ChangePrice from "./components/ChangePrice";

function App() {

    return (
        <div className="App">
            <Header/>
            <UserInfo/>
            <ChangePrice/>
            <DetailPage/>
        </div>
    )
}

export default App
