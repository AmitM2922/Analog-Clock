setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // for X hours the degree angle will be created :(30 * hour + minutes/2)
    h = 30*htime + mtime/2;
    // for X Mintutes the  degree angle will be created : 6 * minutes
    m= 6*mtime;
    // for X seconds the degree angle will be created : 6 * sec
    s= 6*stime;

    hour.style.transform = `rotate(${h}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;
}, 1000);