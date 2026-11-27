// Historical printed case: calendar and chart structure only; not clinical or prediction inference.
const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",E=[4,2,0,0,2,1,1,2,3,3,2,4],P=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n;
function jd(y,M,d){let a=Math.floor((14-M)/12),Y=y+4800-a,M2=M+12*a-3;return d+Math.floor((153*M2+2)/5)+365*Y+Math.floor(Y/4)-Math.floor(Y/100)+Math.floor(Y/400)-32045;}
let cand=[];
for(let month=9;month<=10;month++)for(let d=1;d<=(month===9?30:31);d++){let j=jd(2001,month,d),i=m(j+49,60);if(i===13)cand.push({month,d,j});}
function calc(month,d,D){let j=jd(2001,month,d),i=m(j+49,60),g=i%10,z=i%12,A=m(P[g]+D),C=m(z+D),U=[A,m(A+D),C,m(C+D)],L=[g>>1,E[A],E[z],E[C]],lo=U.filter((x,k)=>m(E[x]-L[k],5)===2),up=U.filter((x,k)=>m(L[k]-E[x],5)===2),cs=[...new Set(lo.length?lo:up)],q=m(i-i%10);return {month,d,j,i,day:S[g]+B[z],D,U:U.map(x=>B[x]),lo:lo.map(x=>B[x]),up:up.map(x=>B[x]),trans:cs.length===1?[cs[0],m(cs[0]+D),m(cs[0]+2*D)].map(x=>B[x]):null,empty:[m(q+10),m(q+11)].map(x=>B[x]),landEmpty:[m(q+10+D),m(q+11+D)].map(x=>B[x]),opp:m(A-C)===6,baseOpp:m(P[g]-z)===6};}
const originalDateForcedGeneral=calc(10,21,2),originalDateMiddleQiGeneral=calc(10,21,1),candidate=calc(9,11,2);
assert.deepEqual(cand,[{month:9,d:11,j:2452164}]);
assert.equal(originalDateForcedGeneral.day,"丁巳");assert.equal(candidate.day,"丁丑");assert.equal(m(jd(2001,9,14)+49,60),16);
assert.deepEqual(candidate.U,["酉","亥","卯","巳"]);assert.deepEqual(candidate.trans,["酉","亥","丑"]);assert.deepEqual(candidate.empty,["申","酉"]);assert.deepEqual(candidate.landEmpty,["戌","亥"]);
assert.deepEqual(originalDateForcedGeneral.trans,candidate.trans);assert.notDeepEqual(originalDateForcedGeneral.U,candidate.U);assert.notDeepEqual(originalDateForcedGeneral.empty,candidate.empty);assert.deepEqual(originalDateMiddleQiGeneral.trans,["申","酉","戌"]);
for(let i=0;i<60;i++)for(let D=0;D<12;D++)assert.equal(m(P[i%10]-i%12)===6,m(m(P[i%10]+D)-m(i%12+D))===6);
console.log(JSON.stringify({cand,originalDateForcedGeneral,originalDateMiddleQiGeneral,candidate},null,2));
