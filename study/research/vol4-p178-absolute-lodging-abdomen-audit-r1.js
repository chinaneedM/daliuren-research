// Formal symbolic comparison only, not clinical or prediction inference.
const assert=require('node:assert/strict');
const b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸",E=[4,2,0,0,2,1,1,2,3,3,2,4],P=[2,4,5,7,5,7,8,10,11,1],L=[11,2,2,5,8],m=(x,n=12)=>(x%n+n)%n;
let results=[];
for(const T of [[9,0,0,3,6],[9,0,6,3,6]]){
 let table=s.split("").map((v,g)=>{const t=T[g>>1],a=m(L[E[t]]+9);return {g:v,t:b[t],abs:b[a],lodge:b[P[g]],same:a===P[g],lowerKe:m(E[t]-E[a],5)===2,upperKe:m(E[a]-E[t],5)===2,sheng:b[L[E[t]]],daySheng:b[L[g>>1]]}});
 let a=Array(8).fill(0),own=Array(4).fill(0),body=Array(4).fill(0),clash=Array(4).fill(0);
 for(let i=0;i<60;i++){
  let g=i%10,t=T[g>>1],q=m(i-i%10);
  for(let D=0;D<12;D++){
   let lower=m(1-D),f=m(t+D)===1,e=m(1-q)>=10,l=m(lower-q)>=10;a[+f+2*+e+4*+l]++;
   let p=m(t-D)===L[E[t]],v=m(t-D)===L[g>>1];own[+p+2*+v]++;
   let abs=m(t-D)===m(L[E[t]]+9),day=m(t-D)===P[g];body[+abs+2*+day]++;
   let c=m(D-t)===6,k=m(E[t]-E[D],5)===2;clash[+c+2*+k]++;
  }
 }
 results.push({T,table,a,own,body,clash});
}
assert.deepEqual(results.map(x=>[x.a,x.own,x.body,x.clash]),[[[456,44,94,6,94,6,16,4],[600,60,60,0],[630,30,30,30],[516,36,144,24]],[[458,42,92,8,92,8,18,2],[612,48,48,12],[624,36,36,24],[552,24,108,36]]]);
console.log(JSON.stringify(results,null,2));
