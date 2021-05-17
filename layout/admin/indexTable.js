console.log(document.cookie);
if(document.cookie === '') {
    document.location.href = '../admin';
}