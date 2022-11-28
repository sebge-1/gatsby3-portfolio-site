import React from 'react';
import { useEffect, useState } from 'react';
import { getReadTime } from '../utils/readTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalculateIcon from '@mui/icons-material/Calculate';
import CountUp from 'react-countup';

const InfoBar = (props) => {
    const [count, setCount] = useState(0)
    const [readTime, setReadTime] = useState(0)

    useEffect(() => {
        const text = document.body.innerText
        const words = text.split(" ")
        const readTime = getReadTime(words)
        setCount(words.length)
        setReadTime(readTime)
    }, []); 

  return(
    <p>
          <CalendarMonthIcon></CalendarMonthIcon>
          {props.date}
          <CalculateIcon>
            
          </CalculateIcon> 
          <CountUp
                start={0}
                end={count}
                duration={3.25}
            >
        </CountUp> words
          <ScheduleIcon>
          </ScheduleIcon>
          {readTime} reading time
    </p>
  )
}
export default InfoBar;