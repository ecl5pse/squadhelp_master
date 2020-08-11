import React from 'react';
import {useState, useEffect} from 'react';
import {connect} from "react-redux";
import styles from './Timer.module.scss'
import { toast } from 'react-toastify';
import {options,timeCalc} from '../Utils';

const  Timer = ({eventsArr,createEventValue,dateEvent,nameEvent,notificationDateEvent})=>{

  const timeToEvent = dateEvent - new Date()
  const totalTime = dateEvent - notificationDateEvent;
  const timeToEventSec = Math.floor(timeToEvent / 1000)
  const totalTimeSec = Math.floor(totalTime /1000)

  const calculateTimeLeft = () => {

    if (timeToEventSec === totalTimeSec && !toast.isActive(1)) {
      const timeToEvent = dateEvent - notificationDateEvent;
     const timeObj = timeCalc(timeToEvent);
      toast.success(`Through ${timeObj.d} day ${timeObj.h} hour ${timeObj.m} minutes ${timeObj.s} seconds will take place`,options)
    }
    if (timeToEvent > 0) {
      return timeCalc(timeToEvent);
    }
    return toast.success(nameEvent, options);
  };
const countActiveEvents = () => {
    return eventsArr.filter(event => {
      const diffTime = new Date() - event.dateEvent;
      return diffTime > 0
    }).length
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [percentage,setPercentage] = useState(0)



  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      if (timeLeft.length === 0) {
        clearTimeout(timer);
      }
    }, 1000);
    if (timeToEvent > 0) {
      const bar = setTimeout(() => {
        if (percentage < 100 ) {
          setPercentage(percentage + 1);
        } else {
          clearTimeout(bar);
        }
      }, 1000)
    }
  })

  const timerComponents = [];
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
       return
    }
    timerComponents.push(
        <span className={styles.timer}>
        {timeLeft[interval]}{interval}
      </span>
    );
  });
  return (
        <>
        <div className={styles.container}>
          <div className={styles.progress} style={{opacity: 1, width: `${percentage}%`}}/>
             <div className={styles.name}>{nameEvent}</div>
          <div className={styles.timer}>{timerComponents}</div>
        </div>
            <div className={styles.countActive}>{countActiveEvents()}</div>
        </>
  );
}


const mapStateToProps = state => state.eventStore;

export default connect(mapStateToProps)(Timer);