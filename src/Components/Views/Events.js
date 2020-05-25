import React, { Fragment } from "react";

const Events = () => {
  return (
    <Fragment>
      <iframe
        src='https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23f3f3f3&amp;;showTitle=0&amp;showPrint=0&amp;hl=en_GB&amp;src=ivt6eluu20amgvub3e50ge3c6c%40group.calendar.google.com&ctz=Europe%2FDublin&amp;color=%23F4511E&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;mode=MONTH'
        title='EventsCalender'
        width='100%'
        height='600'
        frameborder='0'
        scrolling='no'
      ></iframe>

      {/* <iframe
        src='https://calendar.google.com/calendar/embed?src=ivt6eluu20amgvub3e50ge3c6c%40group.calendar.google.com&ctz=Europe%2FDublin'
        style='border: 0'
        width='800'
        height='600'
        frameborder='0'
        scrolling='no'
      ></iframe> */}
    </Fragment>
  );
};

export default Events;
