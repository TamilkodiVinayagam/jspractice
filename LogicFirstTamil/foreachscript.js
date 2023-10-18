arr=['ECE','CSE','IT','EEE','MECH','CIVIL']
arr.forEach(element => {
    let opt=document.createElement("li")
    opt.textContent=element
    let myList=document.getElementById("myList").appendChild(opt)
});