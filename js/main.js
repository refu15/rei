// calendar.js

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ja',
        events: [
            {
                title: 'イベント1',
                start: '2024-07-22',
                url: 'event1.html',
                className: 'event1-icon'
            },
            {
                title: 'イベント2',
                start: '2024-07-23',
                url: 'event2.html',
                className: 'event2-icon'
            },
            {
                title: 'イベント3',
                start: '2024-07-24',
                url: 'event3.html',
                className: 'event3-icon'
            }
        ],
        eventDidMount: function(info) {
            var iconClass = info.event.extendedProps.className;
            info.el.querySelector('.fc-event-title').classList.add(iconClass);
        }
    });

    calendar.render();
});
