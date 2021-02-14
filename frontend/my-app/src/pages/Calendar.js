import "../App.css"
import React from "react";
//[https://www.npmjs.com/package/react-weekly-schedule]
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';


class Calendar extends React.Component {
    localData: EventSettingsModel = {
        dataSource: [{
            EndTime: new Date(2021, 1, 11, 6, 30),
            StartTime: new Date(2021, 2, 11, 6, 30)
        }]
    }
    render () {
        return <ScheduleComponent currentView="Week">
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    }
}

export default Calendar;