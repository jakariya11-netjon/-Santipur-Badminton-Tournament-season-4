// app.js (Public live updates)
const db = firebase.database();

/* 🔴 CURRENT MATCH – Live score + status */
db.ref("currentMatch").on("value", (snap) => {
    const d = snap.val();
    if (!d) return;

    document.getElementById("liveMatch").innerText =
        d.teamA + " 🆚 " + d.teamB;

    document.getElementById("liveScore").innerText =
        d.scoreA + " - " + d.scoreB;

    document.getElementById("liveStatus").innerText =
        d.status;
});

/* 🟡 NEXT MATCH (separate control) */
db.ref("nextMatch").on("value", (snap) => {
    const n = snap.val();
    if (!n) return;

    document.getElementById("liveMatch").innerText =
        n.teamA + " 🆚 " + n.teamB;
});

/* 🔵 LIVE NOTICE */
db.ref("notice").on("value", (snap) => {
    const n = snap.val();
    if (n !== null) {
        document.getElementById("liveNotice").innerText = n;
    }
});
