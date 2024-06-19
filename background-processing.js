const analyticsData = {
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
};

function sendAnalyticsData(data) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });

    if (navigator.sendBeacon) {
        if (!navigator.sendBeacon(url, blob)) {
            console.error('sendBeacon failed');
        }
    } else {
        fetch(url, {
            method: 'POST',
            body: blob,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => console.error('Fetch fallback error:', error));
    }
}

function scheduleAnalyticsDataSend() {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => sendAnalyticsData(analyticsData), { timeout: 2000 });
    } else {
        setTimeout(() => sendAnalyticsData(analyticsData), 1000);
    }
}

document.addEventListener('DOMContentLoaded', scheduleAnalyticsDataSend);