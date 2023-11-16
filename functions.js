const passwords = document.querySelectorAll('input[type="password"]');
const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('button');



function isValid()
{
    if(passwords[0].textContent !== passwords[1].textContent)
    {
        console.log(passwords[0].textContent + " " + passwords[1].textContent);
        alert("Passwords did not match");
        return;
        
    }
    alert("Successful form submission!")
}
