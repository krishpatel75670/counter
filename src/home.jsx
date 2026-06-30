import './home.css';
import swamiimg from './assets/phonescreen.png';
import bappas from './assets/webscreen.jpg';

function Home() {
    return (
        <div className="hero">
            <h1> દયાળુ, જય સ્વામિનારાયણ </h1>
            <h3>રાજી રહેજો, કૃપા કરજો</h3>
            <img src={swamiimg} alt="" id='ph' />
            <img src={bappas} alt="" id='wb' />

        </div>
    );
}

export default Home;