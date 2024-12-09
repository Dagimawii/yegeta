setTimeout(() => {
    document.querySelector('.loading_page').style.display = 'none';
    document.querySelector('.main').style.display = 'flex';
  }, 3000);


  function loginbtn(){
    username = document.getElementById("uname").value;
    const password = document.getElementById("pass").value;
    const error = document.getElementById("error");


    if((username =="babi" && password == "123") ||(username =="keyu" && password=="123") ||(username =="nani" && password == "123") || (username =="mami" && password == "123") ){


        error.textContent = "Login Successfully";
        error.style.color="#09c031";
        error.style.display="flex";
        localStorage.setItem("username", username);
        setTimeout(()=>{
          document.querySelector('.loading_page').style.display = 'flex';
          document.querySelector('.main').style.display = 'none';
        },2000);
         setTimeout(()=>{
          window.location.href="BS.html";},3000);

    }
    else if(username =="" || password ==""){
        error.style.display="flex";
    }
    else{
        error.style.display="flex";
    }
    
  }