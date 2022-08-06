import Home from './components/Home'
import SiteContext from './context/SiteContext'
import AuthContext from './context/AuthContext'
function App2() {



    return (
        <SiteContext>
            <AuthContext>
                <Home />
            </AuthContext>
        </SiteContext>
    )
}

export default App2