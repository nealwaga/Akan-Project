function getIndex(userDate) {
    const date = new Date(userDate);

    if(date.getMonth() <=0 || date.getMonth() > 12){
        console.log("error!")
    } else 
    return date.getDay()

}

function getGender(gender) {
    return gender 
}

function getAkan(){
    /*const v = document.getElementById("genders").value
    const a = document.getElementById("birthday").value */
    const index = getIndex("3/7/2022");
    const userGender = getGender("Male")
    let males = 
        {
            {day: "Sunday" , name: "Kwasi"},
            {day: "Monday" , name: "Kwadwo"},
            {day: "Tuesday" , name: "Kwabena"},
            {day: "Wednesday" , name: "Kwaku"},
        }
}