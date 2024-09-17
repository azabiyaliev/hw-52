import './App.css';
import './components/card.tsx';
import Card from './components/card.tsx';

const App = () => {

    return (
        <>
            <div className="playingCards faceImages">
                <Card rank={'K'} suit={'clubs'}/>
            </div>
        </>
    );
};

export default App;
