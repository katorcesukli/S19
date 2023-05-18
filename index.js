let username = "Rian"
let password = "12345"
let role = "admin"

var loginusername1 = prompt("Enter username: ")
var loginpassword1 = prompt("Enter password: ")
var loginrole1 = prompt("Enter role: admin/teacher/student")

let user = {
	loginusername: loginusername1,
	loginpassword: loginpassword1,
	loginrole: loginrole1
}
user.rolelogin = function(){
if(this.loginrole == "admin"){
	alert("Welcome back to the class portal, admin!")
	console.log("Welcome back to the class portal, admin!")
}else if(this.loginrole == "teacher"){
	alert("Welcome back to the class portal, teacher!")
	console.log("Welcome back to the class portal, teacher!")
}else if(this.loginrole == "student"){
	alert("Welcome back to the class portal, student!")
	console.log("Welcome back to the class portal, student!")
}else{
	alert("Role out of range.")
	console.log("Role out of range.")
}
}


/*
var loginusername = prompt("Enter username: ")
var loginpassword = prompt("Enter password: ")
var loginrole = prompt("Enter role: admin/teacher/student")
*/
let lusername = username.length;
let lpassword = password.length;
  if(typeof username === "string" && typeof password === "string" && loginusername1 == username && loginpassword1 == password){

                 console.log("Login successful.");
                 if(lpassword >= 6){
                 	console.log("Password length is at least 5")
                 }
                 else{//dito ang successful login
                 	console.log("Password length is sufficient")
                 	user.rolelogin()
                 	alert("Calculate the average of four numbers")
					var first = parseInt(prompt("Enter first score: "))
					var second = parseInt(prompt("Enter second score: "))
					var third = parseInt(prompt("Enter third score: "))
					var fourth = parseInt(prompt("Enter fourth score: "))
					let average = (first + second + third + fourth)/4;
					//Math.round(average)
					//console.log(average)
					alert("The average is " + Math.round(average))


			

switch(true){
	//if the grade is greater than or equal to 96 = A+
	case (average >= 96):
		alert('Hi ' + loginusername1 + ', Your grade is A+')
		console.log('Your grade is A+');
		break;
	//if the grade is greater than or equal to 89 = A
	case (average >= 90 && average <=95):
	alert('Hi ' + loginusername1 + ', Your grade is A')
		console.log('your grade is A');
		break;
	//if the grade is greater than or equal to 80 = B
	case (average >= 80 && average <=89):
	alert('Hi ' + loginusername1 + ', Your grade is B')
		console.log('Your grade is B');
		break;
	//if the grade is less than or equal to 70 = F
	default:
		alert('Hi ' + loginusername1 + ', Your grade is F')
		console.log('Your grade is F');
		break;
};

                 }
             }
   else{
   	console.log("One of the entry is incorrect. Try again")
   }

