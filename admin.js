// admin.js

const db = firebase.database();

// 🔴 Update live score
function updateScore() {
    db.ref("currentMatch").set({
        teamA: document.getElementById("a").value,
        teamB: document.getElementById("b").value,
        scoreA: Number(document.getElementById("sa").value || 0),
        scoreB: Number(document.getElementById("sb").value || 0),
        status: "Running"
    });
    alert("Score Updated");
}

// 🟡 Update next match
function updateNextMatch() {
    db.ref("nextMatch").set({
        teamA: document.getElementById("nmA").value,
        teamB: document.getElementById("nmB").value
    });
    alert("Next Match Updated");
}

// 🔵 Update notice
function updateNotice() {
    db.ref("notice").set(
        document.getElementById("notice").value
    );
    alert("Notice Updated");
}

// 🏁 Finish match
function finishMatch() {
    db.ref("currentMatch/status").set("Finished");
    alert("Match Finished");
}
