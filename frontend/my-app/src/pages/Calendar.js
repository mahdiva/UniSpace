import "../App.css"
import React from "react";
// import '@remotelock/react-week-scheduler/index.css';
//[https://www.npmjs.com/package/react-weekly-schedule]
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';


class Calendar extends React.Component {
    render () {
        return <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    }
}

export default Calendar;