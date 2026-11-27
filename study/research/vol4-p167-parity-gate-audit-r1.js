const assert=require('node:assert/strict');
const b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸",el=[4,2,0,0,2,1,1,2,3,3,2,4],lod=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n;
let out={n:0,compare:[0,0],allUpperSame:[0,0],direct:0,full:[0,0],wrap:[0,0],fullPhase:[0,0,0,0],orderedVsCount:0};
const groups=[[2,6,10],[5,9,1],[8,0,4],[11,3,7]];
for(let i=0;i<60;i++)for(let D=0;D<12;D++){let H=x=>m(x+D),g=i%10,A=H(lod[g]),B=H(A),R=i%12,C=H(R),Q=H(C),U=[A,B,C,Q],match=g%2===A%2;out.n++;out.compare[+match]++;if(U.every(x=>x%2===g%2))out.allUpperSame[+match]++;
if(D===0||D===6)continue;let L=[Math.floor(g/2),el[A],el[R],el[C]],lower=U.filter((x,k)=>m(el[x]-L[k],5)===2),upper=U.filter((x,k)=>m(L[k]-el[x],5)===2),cand=[...new Set(lower.length?lower:upper)];if(cand.length!==1)continue;
out.direct++;let I=cand[0],M=H(I),E=H(M),T=[I,M,E],full=groups.findIndex(group=>new Set(T).size===3&&T.every(x=>group.includes(x))),wrap=I%2===E%2&&I%2!==M%2;if(full>=0){out.full[+match]++;if(!match)out.fullPhase[full]++;}if(wrap)out.wrap[+match]++;if(!match&&full<0&&!wrap&&new Set(T.map(x=>x%2)).size===2)out.orderedVsCount++;}
assert.deepEqual(out,{n:720,compare:[360,360],allUpperSame:[0,180],direct:337,full:[39,32],wrap:[88,103],fullPhase:[10,10,9,10],orderedVsCount:0});console.log(JSON.stringify(out,null,2));