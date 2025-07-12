export function formatFullDate(dateString) {
    if (!dateString) return '-';

    const date = new Date(dateString);

    const options = {
        timeZone: 'Africa/Nairobi',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat('en-KE', options).format(date);

    const day = new Intl.DateTimeFormat('en-KE', {
        day: 'numeric',
        timeZone: 'Africa/Nairobi'
    }).format(date);

    const daySuffix = (d) => {
        d = parseInt(d);
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    // Add suffix to day
    return formattedDate.replace(day, `${day}${daySuffix(day)}`);
}