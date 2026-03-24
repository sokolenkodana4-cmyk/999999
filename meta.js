function toggleAnswer(id){
    const answer = document.getElementById(id);
    if(answer.style.display ==='none' || !answer.style.display) {
        answer.style.display = 'black';
    } else {
        answer.style.display ='none';
    }
}