const passwords = document.querySelectorAll('input[type="password"]');
const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('button');



function isValid()
{
    if(passwords[0].value !== passwords[1].value)
    {
        
        alert("Passwords did not match");
        return;
        
    }
    alert("Successful form submission!")
}
