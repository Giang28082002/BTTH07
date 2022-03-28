
//check userid
let useridInput= document.getElementById('userid-input')
let useridError=document.getElementById('user-error')

useridInput.addEventListener('blur',function(){
    a=useridInput.value.length
    if(a==0|| (a>=5&&a<=12)){
        useridError.textContent=''
    }
    else if(!(a>=5 && a<=12)){
        useridError.textContent='Userid có độ dài 5-12 kí tự'
        listError[1]=false //lỗi đúng đắn
    }
})

//check password
let passwordInput=document.getElementById('password-input')
let passError=document.getElementById('pass-error')
passwordInput.addEventListener('blur',function(){
    b=passwordInput.value.length
    if(b==0||(b>=7&&b<=12)){
        passError.textContent=''
    }
    else if(!(b>0 && b>=7 && b<=12)){
        passError.textContent='Password có độ dài 7-12 kí tự'
        listError[2]=false
    }
})

//check name
let checkName=/^[a-z A-Z]+$/;
let nameInput=document.getElementById('name-input')
let nameError=document.getElementById('name-error')
nameInput.addEventListener('blur', function(){
    if(nameInput.value==0||checkName.test(nameInput.value)){
        nameError.textContent=''
    }
    else if(!checkName.test(nameInput.value)){
        nameError.textContent='Name chỉ chứa kí tự a-z hoặc A-Z'
        listError[3]=false
    }
})

//check zipcode
let checkZip=/^[0-9]+$/
let zipInput=document.getElementById('zipcode-input')
let zipError=document.getElementById('zip-error')
zipInput.addEventListener('blur', function(){
    if(zipInput.value==0||checkZip.test(zipInput.value)){
        zipError.textContent=''
    }
    else if(!checkZip.test(zipInput.value)){
        zipError.textContent='ZipCode chỉ chứa kí tự số 0-9'
        listError[4]=false
    }
})

//check email
let checkEmail=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,6}/igm
let emailInput=document.getElementById('email-input')
let emailError=document.getElementById('email-error')
emailInput.addEventListener('blur',function(){
    if(emailInput.value==0||checkEmail.test(emailInput.value)){
        emailError.textContent=''

    }
    else if(!checkEmail.test(emailInput.value)){
        emailError.textContent='Địa chỉ email không hợp lệ'
        listError[5]=false
    }
})
// kiểm tra tính đúng đắn của form
let listError=[true,true,true,true,true]
function check_error(){
	if(listError.includes(false)){
		alert("Bạn cần nhập đúng, đủ thông tin theo yêu cầu");
		return false;
	}
}
let btnSubmit=document.getElementById('btnSubmit')
btnSubmit.addEventListener('click',check_error)