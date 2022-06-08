import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pomodorro = () => {

    const [time, setTime] = useState(900);
    const [isRunning, setIsRunning] = useState(false);
    const [showEnd, setShowEnd] = useState(false);
    const [countOffRuns, setCountOffRuns] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            isRunning && time > 0 && setTime(prevState => prevState - 1)
            if(time === 0) {
                setShowEnd(true); 
                setTimeout(() => setShowEnd(false), 3000);
                setCountOffRuns(prevState => prevState + 1);
                countOffRuns % 2 === 0 ? setTime(900) : setTime(300);
            }
        }, 1000);

        return () => clearInterval(timer);
      });
    return ( 
        <main className="content adder">
            <div className="inner pomodorro">
                <h1>Pomodorro</h1>
                <div className="time">
                    {countOffRuns % 2 === 0 ? <h3>Work</h3> : <h3>Rest</h3>}
                    {Math.floor(time/60) < 10 ? "0"+Math.floor(time/60) : Math.floor(time/60)}:{time%60 < 10 ? "0"+time%60 : time%60}
                    <input type="button" value="Start" onClick={() => setIsRunning(true)} />
                    <input type="button" value="Stop" onClick={() => setIsRunning(false)} />
                    <input type="button" value="Reset" onClick={() => {
                        setTime(900);
                        setCountOffRuns(0);
                        setIsRunning(false);
                        setShowEnd(false); 
                    }} />
                    <Link to="/Dashboard"><input type="button" className='taskOptBtn addTask' value="Go Back" /></Link>
                    {showEnd && <span className="success">Good Work!</span>}
                </div>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Pomodorro;