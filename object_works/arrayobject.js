var point_tables=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkd",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]
//prnt number of team playing ipl_2k21
console.log(point_tables.length);
//prnt team names only
point_tables.map(team=>team.t_name).forEach(team=>console.log(team))
//pnt team details whose pont>10
var details=point_tables.filter(team=>team.pts>10)
console.log(details);
//is kkr playing ipl2k_21
var kkr=point_tables.some(team=>team.t_name=="kkr")
console.log(kkr);
//sort team wrt loss dec
point_tables.sort((team1,team2)=>(team1.loss-team2.loss))
console.log(point_tables);
//prnt team details who have max point
var maxpoint=point_tables.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
console.log(maxpoint);
