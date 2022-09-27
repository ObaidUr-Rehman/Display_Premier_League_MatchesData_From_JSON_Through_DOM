var mainhead=document.getElementById("name");
var getMainDiv= document.getElementById("matchList");

mainhead.innerHTML=data.name;


for(var key in data.rounds){
  var box=document.createElement("div");
  box.setAttribute("class","list");
  box.style.textAlign="center";
  box.setAttribute("onClick", `details(${key})`)

  box.appendChild(document.createTextNode(data.rounds[key].name));
  getMainDiv.appendChild(box);

}

var boss = document.getElementById("mod");
boss.setAttribute("class","modal");


var main2 = document.createElement("div");
main2.setAttribute("class","modal-content");

var s = document.createElement("span");
s.setAttribute("class","close");
s.onclick = function () {
  boss.style.display = "none";
};


var stext = document.createTextNode("❌");
s.appendChild(stext);
main2.appendChild(s);

boss.appendChild(main2);


function details(rname) {
  console.log(rname);
  
  for(var key2 in data.rounds[key].matches){
    boss.style.display = "block";
  //   // console.log(`Team 1 name:${data.rounds[rname].matches[key2].team1}`);
  //   // console.log(`Team 2 name:${data.rounds[rname].matches[key2].team2}`);
  //   // console.log(`Date of Match:${data.rounds[rname].matches[key2].date}`);
  //   // console.log(`Score=${data.rounds[rname].matches[key2].score.ft}`);


      var p = document.createElement("p");
      p.appendChild(
        document.createTextNode(`Date of Match: ${data.rounds[rname].matches[key2].date},Team 1: ${data.rounds[rname].matches[key2].team1},Team 2: ${data.rounds[rname].matches[key2].team2} => Score: ${data.rounds[rname].matches[key2].score.ft}`
        )
      );

  
      
      main2.appendChild(p);
  }
}

     


