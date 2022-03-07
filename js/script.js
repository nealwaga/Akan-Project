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
            {day: "Thursday" , name: "Yaw"},
            {day: "Friday" , name: "Kofi"},
            {day: "Saturday" , name: "Kwame"},
        }
    let females = 
        {
            {day: "Sunday" , name: "Akosua",}
            {day: "Monday" , name: "Adwoa"},
            {day: "Tuesday" , name: "Abenaa"},
            {day: "Wednesday" , name: "Akua"},
            {day: "Thursday" , name: "Yaa"},
            {day: "Friday" , name: "Afua"},
            {day: "Saturday" , name: "Ama"},
        }

        if(userGender=="Male"){
            for (let [key, value] of Object.entries(males)) {
                if(index == key){
                    return value.name
                }
            }
        }
        return value.name

        if(userGender=="Female"){
            for (let [key , value] of Object.entries(females)) {
                if(index == key){
                    return value.name
                }
            }
        }
        return value.name
}

console.log(getAkan())
// console.log(getIndex)