
 






async function setpage(){
var restURL= 'https://restcountries.eu/rest/v2/all'
var response = await fetch(restURL)
var result = await response.json()
var final = await eject(result)
console.log(result)

}
setpage()
function eject(Countries)
{
var maindiv=document.createElement("div");
maindiv.className="container";
maindiv.id="ContainerDiv";

console.log(Countries.length);
var card=[]
Countryname=[]
CountryImage=[]
capital=[]
CountryCode=[]
Region=[]
var column=[],row=[];
for (var j = 0; j <1; j++) {    

row[j]=document.createElement("div");
row[j].className="row";
for (let i = 0; i < Countries.length; i++) {

column[i]=document.createElement("div");
column[i].className="col-sm-3"

card[i]=document.createElement("div");
card[i].className="card";



Countryname[i]=document.createElement("div");
Countryname[i].className="Countryname";
Countryname[i].innerHTML=i+1+"). "+Countries[i].name;
card[i].appendChild(Countryname[i]);

CountryImage[i]=document.createElement("img");
CountryImage[i].src=Countries[i].flag;
CountryImage[i].className="card-img-top";

CountryImage[i].setAttribute("id",Countries[i].capital );


card[i].appendChild(CountryImage[i]);
button =  document.createElement("button")
button.setAttribute("class"," btn btn-secondary" )
button.setAttribute("type"," button" )
button.setAttribute("id",Countries[i].capital );
button.innerHTML="Temperature"
button.setAttribute("onclick", "temp(this.id)");
card[i].appendChild(button);


capital[i]=document.createElement("div");
capital[i].className="CountryDetails";
capital[i].innerHTML="Country Capital : "+Countries[i].capital;
card[i].appendChild(capital[i]);


CountryCode[i]=document.createElement("div");
CountryCode[i].className="CountryDetails";
CountryCode[i].innerHTML="Country Codes : "+Countries[i].alpha2Code;
card[i].appendChild(CountryCode[i]);


Region[i]=document.createElement("div");
Region[i].className="CountryDetails";
Region[i].innerHTML="Region : "+Countries[i].region;
card[i].appendChild(Region[i]);

column[i].appendChild(card[i]);
row[j].appendChild(column[i]);
}

maindiv.appendChild(row[j]);
}

document.body.appendChild(maindiv);
console.log(Countries);
}



function temp(id){
console.log(id)
const proxyurl = "https://cors-anywhere.herokuapp.com/";

fetch('https://api.openweathermap.org/data/2.5/weather?q='+id+'&appid=8268b17f393fe7bfcc03f70e2f6d2f98').then((data)=>{
    console.log(data)       
    return data.json();
}).then(d=> {console.log(d.main.temp)
alert("the temp in capital.."+id+" "+d.main.temp)})
.catch((error)=>{
    console.log("Error encountred while fetching the countries");
});
}




