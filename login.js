function login(){
    let user= document.getElementById("username").value

    if(user==="Admin"){
        let pass=document.getElementById("password").value
        if(pass==="Master"){
            alert("Welcome")
        }else if(!pass){
            document.getElementById("result").innerText="Canceled"
        }else {
            alert("wrong password")
        }
    }else {
        document.getElementById("result").innerText="I don't know you"
    }

}

