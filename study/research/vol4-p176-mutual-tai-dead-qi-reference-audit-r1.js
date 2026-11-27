// Research-only structural comparisons, no real pregnancy or medical inference.
const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",E=[4,2,0,0,2,1,1,2,3,3,2,4],P=[2,4,5,7,5,7,8,10,11,1],mod=(x,n=12)=>(x%n+n)%n,tai0=[9,0,0,3,6],tai6=[9,0,6,3,6];
const rows=[["戊寅","酉"],["乙丑","子"],["己未","子"],["癸未","子"],["己未","午"],["癸丑","午"],["己丑","午"],["辛未","午"],["丁丑","午"],["甲申","卯"],["庚寅","酉"]];
const detail=rows.map(([day,a])=>{let g=S.indexOf(day[0]),z=B.indexOf(day[1]),A=B.indexOf(a),d=mod(A-P[g]),C=mod(z+d);return {day,A:a,C:B[C],d,match:[tai0,tai6].map(t=>A===t[E[z]]&&C===t[Math.floor(g/2)])}});
let variants=[],masks=[];
for(const t of [tai0,tai6]){
 let found=[],mask=Array(8).fill(0),override=[0,0,0,0];
 for(let i=0;i<60;i++)for(let d=0;d<12;d++){
  let g=i%10,z=i%12,A=mod(P[g]+d),C=mod(z+d),T=t[Math.floor(g/2)],U=t[E[z]],wealth=x=>mod(E[x]-Math.floor(g/2),5)===2;
  if(A===U&&C===T)found.push(S[g]+B[z]+":"+B[A]+B[C]);
  for(let m=0;m<12;m++){let a=A===T&&A===m&&wealth(A),b=C===U&&C===m,c=(A===m&&wealth(A))||(C===m&&wealth(C));mask[+a+2*+b+4*+c]++;
   if(a){let empty=mod(A-(i-i%10)%12)>=10,land=mod(P[g]-(i-i%10)%12)>=10;override[+empty+2*+land]++;}
  }
 }variants.push(found);masks.push({mask,override});
}
assert.equal(variants[0].length,9);assert.equal(variants[1].length,11);
assert.deepEqual(detail.filter(x=>!x.match.some(Boolean)).map(x=>x.day),["己丑"]);
assert.deepEqual(masks,[{mask:[8316,0,48,0,230,34,10,2],override:[24,6,6,0]},{mask:[8316,0,48,0,242,22,10,2],override:[16,4,4,0]}]);
const nb=[[1,7],[0,8],[11,9],[11,9],[1,7],[0,8],[1,7],[6,2],[5,3],[5,3]],ke=(a,b)=>mod(b-a,5)===2;
let counts={六合:{mask:[0,0,0,0],directLowerKe:0},天后:{mask:[0,0,0,0],directLowerKe:0}};
for(let i=0;i<60;i++)for(let d=0;d<12;d++)for(const N of nb[i%10]){
 let e=mod(N-d),f=[11,0,1,2,3,4].includes(e)?1:-1;
 for(const [name,j,elem] of [["六合",3,0],["天后",11,4]]){
  const h=mod(N+f*j),l=mod(h-d);
  for(let m=0;m<12;m++){const dead=mod(m+6),a=h===dead&&ke(E[dead],elem),b=l===dead&&ke(E[dead],E[h]);counts[name].mask[+a+2*+b]++;if(a&&ke(E[l],E[h]))counts[name].directLowerKe++;}
 }
}
assert.deepEqual(counts,{六合:{mask:[16716,252,312,0],directLowerKe:84},天后:{mask:[16470,504,306,0],directLowerKe:84}});
console.log(JSON.stringify({detail,variants,masks,counts},null,2));
