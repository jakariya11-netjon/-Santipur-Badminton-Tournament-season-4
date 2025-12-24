// app.js (Public live updates)
const db = firebase.database();

db.ref("currentMatch").on("value", (snap) => {
    const d = snap.val();
    if (!d) return;

    document.getElementById("liveMatch").innerText =
        d.teamA + " vs " + d.teamB;

    document.getElementById("liveScore").innerText =
        d.scoreA + " - " + d.scoreB;

    document.getElementById("liveStatus").innerText =
        d.status;
});

db.ref("notice").on("value", (snap) => {
    const n = snap.val();
    if (n !== null) {
        document.getElementById("liveNotice").innerText = n;
    }
});
