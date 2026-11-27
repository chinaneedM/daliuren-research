// Abstract four-lesson coverage and two printed case projections; no empirical prediction.
const lod=[2,4,5,7,5,7,8,10,11,1],nb=[[1,7],[0,8],[11,9],[11,9],[1,7],[0,8],[1,7],[6,2],[5,3],[5,3]],gn="贵人 腾蛇 朱雀 六合 勾陈 青龙 天空 白虎 太常 玄武 太阴 天后".split(" "),fixed=[1,2,4,5,7,9,10,11],m=(x,n=12)=>(x%n+n)%n;
let dist=Array(5).fill(0),counts=Array(12).fill(0),total=0;
for(let i=0;i<60;i++)for(let D=0;D<12;D++)for(const N of nb[i%10]){const dir=[11,0,1,2,3,4].includes(m(N-D))?1:-1,G=x=>m(dir*(x-N)),a=[m(lod[i%10]+D),m(lod[i%10]+2*D),m(i%12+D),m(i%12+2*D)],seen=new Set(a.map(G));dist[fixed.filter(x=>seen.has(x)).length]++;for(const x of seen)counts[x]++;total++}
const cases=[{day:"癸卯",lesson:[11,0,1,2],trans:[1,2,3]},{day:"乙酉",lesson:[3,10,10,5],trans:[5,0,7]}].map(c=>{const seen=new Set([...c.lesson,...c.trans]);return {day:c.day,seen:[...seen].map(x=>gn[x]),fixedSeen:fixed.filter(x=>seen.has(x)).map(x=>gn[x]),fixedMissing:fixed.filter(x=>!seen.has(x)).map(x=>gn[x]),otherSeen:[...seen].filter(x=>!fixed.includes(x)).map(x=>gn[x])}});
console.log({total,dist,counts:counts.map((n,i)=>[gn[i],n]),cases});
