// admin.js (Admin update)
function updateScore() {
    firebase.database().ref("currentMatch").set({
        teamA: document.getElementById("a").value,
        teamB: document.getElementById("b").value,
        scoreA: Number(document.getElementById("sa").value || 0),
        scoreB: Number(document.getElementById("sb").value || 0),
        status: "Running"
    });
}

function updateNotice() {
    firebase.database().ref("notice").set(
        document.getElementById("notice").value
    );
}
