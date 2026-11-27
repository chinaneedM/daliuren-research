// Abstract structural audit; no clinical or prediction claims.
const assert=require('node:assert/strict');
const S=[0,0,1,1,2,2,3,3,4,4],B=[4,2,0,0,2,1,1,2,3,3,2,4],P=[2,4,5,7,5,7,8,10,11,1],L=[11,2,2,5,8];
const mod=x=>(x+12)%12,ke=(a,b)=>(b-a+5)%5===2;
let directVsDun=[0,0,0,0],zhiVsDown=[0,0,0,0],tianyuAnchor=0;
for(let i=0;i<60;i++)for(let d=0;d<12;d++){
 const g=S[i%10],z=i%12,h=mod(P[i%10]+d),q=mod(z+d),k=mod(h-(i-i%10)%12);
 const a=ke(B[h],g),b=k<10&&ke(S[k],g);
 directVsDun[Number(a)*2+Number(b)]++;
 zhiVsDown[Number(ke(B[q],B[z]))*2+Number(ke(B[z],B[q]))]++;
 if(mod(4-d)===L[g])tianyuAnchor++;
}
assert.deepEqual({directVsDun,zhiVsDown,tianyuAnchor},{directVsDun:[480,96,120,24],zhiVsDown:[440,140,140,0],tianyuAnchor:60});
console.log(JSON.stringify({directVsDun,zhiVsDown,tianyuAnchor}));
