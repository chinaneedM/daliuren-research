// Structural research only; not a clinical or predictive model.
const assert=require('node:assert/strict');
const mod=(x,n=12)=>(x%n+n)%n,E=[4,2,0,0,2,1,1,2,3,3,2,4],P=[2,4,5,7,5,7,8,10,11,1],L=[11,2,2,5,8],tai=L.map(x=>mod(x+10)),meng=[2,5,8,11];
let stages={},all=[0,0,0,0],unique=0,xt={},ren=[];
for(let d=0;d<12;d++)stages[d]=meng.map(x=>mod(mod(x-d)-L[E[x]]));
for(let i=0;i<60;i++)for(let d=0;d<12;d++){
 let g=i%10,z=i%12,A=mod(P[g]+d),B=mod(A+d),C=mod(z+d),Q=mod(C+d),U=[A,B,C,Q],down=[Math.floor(g/2),E[A],E[z],E[C]],t=tai[Math.floor(g/2)],u=tai[E[z]];
 all[+(A===t&&C===u)+2*+(A===u&&C===t)]++;
 let lo=U.filter((x,j)=>mod(E[x]-down[j],5)===2),hi=U.filter((x,j)=>mod(down[j]-E[x],5)===2),can=[...new Set(lo.length?lo:hi)];
 if(g===8&&d===7)ren.push({day:z,candidates:can});
 if(d===0||d===6||can.length!==1)continue;
 unique++;if([can[0],mod(can[0]+d),mod(can[0]+2*d)].every(x=>meng.includes(x)))xt[d]=(xt[d]||0)+1;
}
for(let d=0;d<12;d++)assert.deepEqual(stages[d],Array(4).fill(mod(3-d)));
assert.deepEqual(all,[700,11,5,4]);assert.equal(unique,337);assert.deepEqual(xt,{3:17,9:19});
assert.equal(ren.filter(x=>x.candidates.length===1&&x.candidates[0]===6).length,4);
console.log(JSON.stringify({stages,all,unique,xt,ren},null,2));
