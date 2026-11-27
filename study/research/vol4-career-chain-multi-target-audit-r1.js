const assert=require('node:assert/strict');
const e=[4,2,0,0,2,1,1,2,3,3,2,4],l=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n;
let o={n:0,sheng:Array(16).fill(0),ke:Array(16).fill(0)};
for(let i=0;i<60;i++)for(let d=1;d<12;d++){if(d===6)continue;let g=i%10,r=i%12,h=x=>m(x+d),A=h(l[g]),C=h(r),U=[A,h(A),C,h(C)],L=[Math.floor(g/2),e[A],e[r],e[C]],lo=U.filter((x,k)=>m(e[x]-L[k],5)===2),up=U.filter((x,k)=>m(L[k]-e[x],5)===2),cand=[...new Set(lo.length?lo:up)];if(cand.length!==1)continue;let T=[cand[0],h(cand[0]),h(h(cand[0]))],f=m(e[T[1]]-e[T[0]],5),j=m(e[T[2]]-e[T[1]],5);o.n++;if(f!==j||!f)continue;let end=f<=2?T[2]:T[0],sheng=f===1||f===4,target=sheng?1:2,mask=[Math.floor(g/2),e[r],e[A],e[C]].reduce((sum,z,k)=>sum+((m(z-e[end],5)===target?1:0)<<k),0);o[sheng?'sheng':'ke'][mask]++;}
assert.equal(o.n,337);assert.deepEqual(o.sheng,[52,13,12,3,16,3,1,0,8,2,4,0,2,0,0,0]);assert.deepEqual(o.ke,[10,1,2,0,0,0,0,0,3,0,0,0,0,0,0,0]);console.log(JSON.stringify(o,null,2));
