function handleJustFunctionClick() {

    const p = document.getElementById('clicking-method');
        p.innerText = 'set by using function';
}

            //direct
document.getElementById('handle-event').addEventListener('click' , function(){

    const p = document.getElementById('clicking-method');
        p.innerText = 'set by direct add event listener'
})