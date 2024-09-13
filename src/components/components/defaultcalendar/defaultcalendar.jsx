import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import{Card}from "react-bootstrap"
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function DefaultCalendar() {
  
  return (
    <div>
         <PageHeader titles="Default calendar" active="Default calendar" items={['Components']} />
      <div className="">
        <Card>
          <Card.Body>
            <div className="cal1">
              <div className="clndr">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
