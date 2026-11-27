// Abstract structure and printed calendar only. No medical, sexual-history or other personal inference.
const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",E=[4,2,0,0,2,1,1,2,3,3,2,4],P=[2,4,5,7,5,7,8,10,11,1],T=[9,0,0,3,6],m=(x,n=12)=>(x%n+n)%n;
const j=Math.floor(Date.UTC(2005,2,8)/86400000)+2440588;assert.equal(j,2453438);assert.equal(m(j+49,60),27);
let combos=[],unique=0,orient=[0,0],pattern={},matched=[];
for(let i=0;i<60;i++)for(let D=0;D<12;D++){
 let g=i%10,z=i%12,A=m(P[g]+D),C=m(z+D),U=[A,m(A+D),C,m(C+D)],L=[g>>1,E[A],E[z],E[C]],lo=U.filter((x,k)=>m(E[x]-L[k],5)===2),up=U.filter((x,k)=>m(L[k]-E[x],5)===2),cs=[...new Set(lo.length?lo:up)],q=m(i-i%10),dt=T[g>>1],zt=T[E[z]];
 if(i===27)combos.push({D,U:U.map(x=>B[x]).join(""),lower:lo.map(x=>B[x]).join(""),upper:up.map(x=>B[x]).join(""),selected:cs.map(x=>B[x]).join("")});
 if(D===0||D===6||cs.length!==1)continue;
 unique++;let a=cs[0],c=m(a+2*D);if(dt===zt)continue;
 let type=a===zt&&c===dt?0:a===dt&&c===zt?1:-1;if(type<0)continue;
 orient[type]++;let emp=x=>[m(x-q)>=10,m(x-D-q)>=10].map(Number).join("");let k=type+":"+emp(a)+"/"+emp(c);pattern[k]=(pattern[k]||0)+1;
 matched.push({day:S[g]+B[z],D,trans:[a,m(a+D),c].map(x=>B[x]).join("")});
}
assert.equal(unique,337);assert.deepEqual(orient,[2,0]);assert.deepEqual(pattern,{"0:01/00":2});
assert.deepEqual(matched,[{day:"丙子",D:9,trans:"午卯子"},{day:"辛卯",D:3,trans:"酉子卯"}]);
assert.equal(combos[3].U,"丑辰午酉");assert.equal(combos[3].lower,"酉");assert.equal(combos[5].lower,"卯");
console.log(JSON.stringify({j,combos,unique,orient,pattern,matched},null,2));
