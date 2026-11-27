// Research-only abstract symbolic candidate comparison; no clinical or predictive inference.
const assert=require('node:assert/strict');
const stem=[0,0,1,1,2,2,3,3,4,4], branch=[4,2,0,0,2,1,1,2,3,3,2,4], sheng=[11,2,2,5,8];
const mod=x=>(x+12)%12;
let hist=Array(8).fill(0),wuNatal=0,wuMonth=0,monthUnchanged=0,total=0;
for(let i=0;i<60;i++)for(let m=0;m<12;m++)for(let n=0;n<5;n++){
 let a=sheng[stem[i%10]], b=sheng[branch[i%12]], t=mod(sheng[n]+10+6);
 const v=[6,t,m,a,b,mod(a+11),mod(b+11)];hist[new Set(v).size]++;
 if(v[0]===v[1])wuNatal++;if(v[0]===v[2])wuMonth++;
 for(let d=0;d<12;d++){
  const w=v.map(x=>mod(x-d));assert.equal(new Set(w).size,new Set(v).size);
  if(w[2]===m)monthUnchanged++;total++;
 }
}
const result={hist,wuNatal,wuMonth,monthUnchanged,total};
assert.deepEqual(result,{hist:[0,0,0,108,540,852,1344,756],wuNatal:1440,wuMonth:300,monthUnchanged:3600,total:43200});
console.log(JSON.stringify(result));
