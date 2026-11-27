// Abstract consecutive transmission shapes; not actual take-transmission outputs or divination outcomes.
const b="子丑寅卯辰巳午未申酉戌亥",e=[4,2,0,0,2,1,1,2,3,3,2,4],m=x=>(x%12+12)%12;
const groups=[[2,6,10],[5,9,1],[8,0,4],[11,3,7]];
let out={total:0,harm:[0,0,0,0],allSame:[0,0,0,0,0],allSameDistinct:[0,0,0,0,0],earthByD:{},earthCases:[]};
for(let f=0;f<12;f++)for(let D=0;D<12;D++){let tr=[f,m(f+D),m(f+2*D)],u=new Set(tr);out.total++;for(let k=0;k<4;k++)if(u.size===3&&tr.every(x=>groups[k].includes(x)))out.harm[k]++;if(tr.every(x=>e[x]===e[f])){out.allSame[e[f]]++;if(u.size===3)out.allSameDistinct[e[f]]++;if(e[f]===2){out.earthByD[D]=(out.earthByD[D]||0)+1;if(u.size===3&&out.earthCases.length<4)out.earthCases.push(tr.map(x=>b[x]).join(""));}}}
console.log(out);
