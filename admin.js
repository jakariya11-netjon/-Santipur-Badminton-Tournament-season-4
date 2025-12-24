// admin.js (Admin update logic)

// 🔴 Update live score
function updateScore() {
    firebase.database().ref("currentMatch").set({
        teamA: document.getElementById("a").value,
        teamB: document.getElementById("b").value,
        scoreA: Number(document.getElementById("sa").value || 0),
        scoreB: Number(document.getElementById("sb").value || 0),
        status: "Running"
    });
}

// 🔵 Update live notice
function updateNotice() {
    firebase.database().ref("notice").set(
        document.getElementById("notice").value
    );
}

// 🟡 Update next match
function updateNextMatch() {
    firebase.database().ref("nextMatch").set({
        teamA: document.getElementById("nmA").value,
        teamB: document.getElementById("nmB").value
    });
}

// 🏁 Finish match
function finishMatch() {
    firebase.database().ref("currentMatch/status").set("Finished");
}
