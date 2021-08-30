import { AvTimerRounded } from "@material-ui/icons";
import React, { useState,useRef } from "react";
import { useEffect } from "react";

import "./CountWatch.css";
// import AvTimerIcon from '@material-ui/icons/AvTimer';
const CountWatch = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("September 10,2021 00:00:").getTime();

    interval =setInterval(() =>{
        const now=new Date().getTime();
        const distance=countDownDate-now;
        const days=Math.floor(distance/(1000*60*60*24));
        const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes=Math.floor((distance%(1000*60*60)) / (1000*60));
        const seconds=Math.floor((distance%(1000*60))/1000);
if(distance<0){
    // stop our timer
    clearInterval(interval.current);
}
else{
    // update timer
    setTimerDays(days);
    setTimerHours(hours);
    setTimerMinutes(minutes);
setTimerSeconds(seconds);
}
    },1000);
  };

//   component did mount

useEffect(() => {
    startTimer()
    return()=>{
        clearInterval(interval.current);
    }
})
  return (
    <section className="timer-container">
      <section className="timer ">
        <div>
          <section>
            <h6 className="time-head">{timerDays}</h6>
            <p>
              {" "}
              <small> Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <h6 className="time-head">{timerHours}</h6>
            <p>
              <small> Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <h6 className="time-head">{timerMinutes}</h6>
            <p>
              <small> Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <h6 className="time-head">{timerSeconds}</h6>
            <p>
              <small> Second</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CountWatch;
