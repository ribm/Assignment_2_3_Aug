 
 async function search(){
    var x = document.getElementById("movie").value
    console.log(x)
     
     console.log(x)
try{
    var response = await fetch('https://omdbapi.com/?apikey=2a59f2dd&t='+x)
    var result = await response.json()
    console.log(result)
    alert(result)



}
catch(error){
    console.log(error)
}
    

    

}
