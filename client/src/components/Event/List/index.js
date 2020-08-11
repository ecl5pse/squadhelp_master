import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Timer from "../Timer/index";
import styles from './List.module.scss'
import { mdiCalendarClock } from '@mdi/js';
import Icon from '@mdi/react';



const EventsList = (props) => {

  const {eventsArr,dateEvent} = props;
  eventsArr.sort((a,b) => a.dateEvent - b.dateEvent);


  return (
      <div className={styles.container}>
        <h4 className={styles.heading}>Live upcomming checks</h4>
        <div className={styles.cont}>
        <Icon className={styles.time} path={mdiCalendarClock} size={1} />
        <p>Remaining Time</p>
        </div>
        <ul className={styles.list}>
          {
            eventsArr.map((event, index) => {
            const key = index + event.date
            return (
                <Timer key={key} {...event} eventsArr={eventsArr}/>
            )})
          }
        </ul>
      </div>

  )
};

const mapStateToProps = state => state.eventStore;


export default connect(mapStateToProps)(EventsList);