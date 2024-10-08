function gradeAssignment() {
    let score = prompt("How old are you?");

    if (score >= 80) {
    alert("Excellent");
    } else if (score >= 80 && score <= 90) {
    alert("Good");
    } else if (score >= 60 && score <= 70) {
    alert("Fair");
     } else {
    alert("Need Improvement");
    }
}