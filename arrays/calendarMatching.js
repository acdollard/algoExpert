function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
      //update the calendars to include all 24 hrs in the day
      const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
      const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2)
      const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);
      const flattenedCalendar = flattenCalendar(mergedCalendar);
      return getMatchingAvailabilities(flattenedCalendar, meetingDuration);
  
      function updateCalendar(calendar, dailyBounds){
          const updatedCalendar = [['0:00', dailyBounds[0]], ...calendar, [dailyBounds[1], '23:59']];
          return updatedCalendar.map(meeting => meeting.map(timeToMinutes));
      }
  
      // create a function that merges the calendars together to create a new calendar
      function mergeCalendars(calendar1, calendar2) {
          const mergedCalendar = [];
          let i = 0;
          let j = 0;
          while (i < calendar1.length && j < calendar2.length) {
              if (calendar1[i][0] < calendar2[j][0]) {
                  mergedCalendar.push(calendar1[i]);
                  i++;
              } else {
                  mergedCalendar.push(calendar2[j]);
                  j++;
              }
          }
  
          while (i < calendar1.length) mergedCalendar.push(calendar1[i++]);
          while (j < calendar2.length) mergedCalendar.push(calendar2[j++]);
          return mergedCalendar;
      };
  
      function flattenCalendar (calendar) {
          const flattened = [calendar[0].slice()];
          for (let i = 1; i < calendar.length; i++) {
              const currentMeeting = calendar[i];
              const previousMeeting = flattened[flattened.length - 1]
              if (currentMeeting[0] < previousMeeting[1]) {
                  const newPreviousMeeting = [previousMeeting[0], Math.max(previousMeeting[1], currentMeeting[1])];
                  flattened[flattened.length -1] = newPreviousMeeting
              } else {
                  flattened.push(currentMeeting.slice()); 
              };
          }
          return flattened;
      }
  
      function getMatchingAvailabilities (calendar, meetingDuration) {
          const matchingAvailabilities = [];
          for (let i = 1; i < calendar.length; i++) {
              let start = calendar[i-1][1];
              let end = calendar[i][0];
              if ((end - start) >= meetingDuration) {
                  matchingAvailabilities.push([start, end])
              }
          } 
          return matchingAvailabilities.map(meeting => meeting.map(minutesToTime));
      }
  
      function timeToMinutes (time) {
          const [hours, minutes] = time.split(':').map(str => parseInt(str));
          return hours * 60 + minutes;
      }
  
      function minutesToTime (minutes) {
          const hours = Math.floor(minutes / 60);
          const mins = minutes % 60;
          const hoursString = hours.toString();
          const minsString = mins < 10 ? '0' + mins.toString() : mins.toString();
          return hoursString + ":" + minsString;
      }
  }



  console.log('all good!');