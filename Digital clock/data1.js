function display(){
    let dt=new Date().toLocaleTimeString()
    document.getElementById('dc').innerHTML = dt
}
display()