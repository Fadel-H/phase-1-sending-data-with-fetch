// Add your code here
let body = document.body
function submitData (userName,userEmail){
   return( fetch('http://localhost:3000/users', {
         method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({name : userName, email : userEmail}),
  })
    .then(resp => resp.json())
    .then((json) => body.append(json.id))
    .catch((error) => {
        alert("You got an oopsy")
        body.append(error.message)
    }))
}