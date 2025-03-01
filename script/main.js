document.getElementById('btn-1').addEventListener('click', function(event){

    alert('Board updated Successfull');

    const totalAssigned = document.getElementById('totalAssigned').innerText;
    const convertTotalAssigned = parseInt(totalAssigned);
    const updatedTotalAssigned = convertTotalAssigned - 1;
    console.log(updatedTotalAssigned)
    document.getElementById('totalAssigned').innerText = updatedTotalAssigned;

    const navTotalAssigned = document.getElementById('nav-totalAssigned').innerText;
    
    const convertnavTotalAssigned = parseInt(navTotalAssigned);
    
    const updatedNavTotalAssigned = convertnavTotalAssigned + 1;
    console.log(updatedNavTotalAssigned)
    document.getElementById('nav-totalAssigned').innerText = updatedNavTotalAssigned;

    const button = document.getElementById("btn-1");
    button.setAttribute('disabled', true);
    button.style.backgroundColor = '#b0b8e6';
})



function disableButton() {
    var button = document.getElementById("btn-1");
    button.disabled = true;
    document.getElementById("btn-1").style.backgroundColor= none;
  }