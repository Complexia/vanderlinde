import NavigationBar from "../components/NavigationBar"
import Portfolio from "../components/Portfolio"
import TradeWindow from "../components/TradeWindow"

function Home() {
    return (
        <div className="background">

            <NavigationBar />

            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <Portfolio />
                        
                    </div>
                    <div className="col-md">
                        <TradeWindow />
                    </div>
                </div>
                
                
            </div>
        </div>
        
    )
}

export default Home