const assert=require('node:assert/strict');
// Symbolic candidate domain: ordinary unique ke, no fuyin/fanyin; not full nine-method engine.
const el=[4,2,0,0,2,1,1,2,3,3,2,4],lod=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n,b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸";
// Research hypothesis only: shorter circular arc; for opposite endpoints either semicircle.
function inside(a,c,t,inclusive){let d=m(c-a);if(d===0)return false;let test=(x,y)=>{let len=m(y-x);return t.every(z=>inclusive?m(z-x)<=len:m(z-x)>0&&m(z-x)<len)};return d<6?test(a,c):d>6?test(c,a):test(a,c)||test(c,a)}
let o={n:0,direct:0,firstLastLiuhe:0,adjacentLiuhe:[0,0,0,0],clipBase:[0,0,0,0],clipUpper:[0,0,0,0],clipStrictCompare:[0,0,0,0],clipInclusiveCompare:[0,0,0,0]},case3;
for(let i=0;i<60;i++)for(let d=0;d<12;d++){o.n++;let g=i%10,r=i%12,h=x=>m(x+d),A=h(lod[g]),C=h(r),U=[A,h(A),C,h(C)];if(d===0||d===6)continue;let L=[Math.floor(g/2),el[A],el[r],el[C]],lo=U.filter((x,k)=>m(el[x]-L[k],5)===2),up=U.filter((x,k)=>m(L[k]-el[x],5)===2),cand=[...new Set(lo.length?lo:up)];if(cand.length!==1)continue;o.direct++;let T=[cand[0],h(cand[0]),h(h(cand[0]))],lh=(x,y)=>m(x+y)===1;if(lh(T[0],T[2]))o.firstLastLiuhe++;o.adjacentLiuhe[+lh(T[0],T[1])+2*+lh(T[1],T[2])]++;let bs=inside(lod[g],r,T,false),bi=inside(lod[g],r,T,true),us=inside(A,C,T,false),ui=inside(A,C,T,true);o.clipBase[+bs+2*+bi]++;o.clipUpper[+us+2*+ui]++;o.clipStrictCompare[+bs+2*+us]++;o.clipInclusiveCompare[+bi+2*+ui]++;if(i===37&&d===11)case3={day:s[g]+b[r],T:T.map(x=>b[x]),bs,bi,us,ui};}
assert.deepEqual(o,{n:720,direct:337,firstLastLiuhe:0,adjacentLiuhe:[271,18,48,0],clipBase:[310,0,13,14],clipUpper:[303,0,25,9],clipStrictCompare:[319,9,4,5],clipInclusiveCompare:[301,2,9,25]});
assert.deepEqual(case3,{day:"辛丑",T:["子","亥","戌"],bs:false,bi:true,us:false,ui:true});
for(let a=0;a<12;a++)for(let d=0;d<12;d++)assert.notEqual(m(a+m(a+2*d)),1);
console.log(JSON.stringify({o,case3},null,2));
