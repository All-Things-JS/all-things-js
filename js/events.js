const API_KEY = 'AIzaSyDJkyIsrI-5oJ5WX3SnEADpiXFrkIBPl5Q';
const CALENDAR_ID = 'dce6a3536ef9267b292d9e73b8b891cf6c62e0fe652b93b95aeeac55b325e1ac@group.calendar.google.com';

(async () => {
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`);
    const calendarEvents = await response.json();
    const eventList = document.getElementById('event-list');

    for (const event of calendarEvents.items) {
        const endDate = new Date(event.end.dateTime);

        if (endDate.valueOf() < Date.now()) {
            continue;
        }

        const listItem = document.createElement('li');
        const startDate = new Date(event.start.dateTime);
        listItem.innerText = `${event.summary}
        ${startDate.toDateString()} ${startDate.toLocaleTimeString()} - ${endDate.toLocaleTimeString()}
        ${event.location}`;
        eventList.appendChild(listItem);
    }
})();
