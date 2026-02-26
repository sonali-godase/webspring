let players=
JSON.parse(localStorage.getItem("players"))||[];

players.sort((a,b)=>b.points-a.points);

let board=document.getElementById("board");

players.forEach((p,i)=>{

board.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${p.name}</td>
<td class="text-pink-400">${p.points}</td>
</tr>
`;

});