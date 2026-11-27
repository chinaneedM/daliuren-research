const assert=require('node:assert/strict');
const e=[4,2,0,0,2,1,1,2,3,3,2,4],l=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n,b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸";
let o={n:0,up:[0,0,0,0],down:[0,0,0,0],heart:{n:0,upper:0,all:0,full:0,upperDistinct:0,allDistinct:0,fullDistinct:0,mask:Array(8).fill(0)}};
for(let i=0;i<60;i++)for(let d=0;d<12;d++){let g=i%10,r=i%12,h=x=>m(x+d),A=h(l[g]),C=h(r),U=[A,h(A),C,h(C)],L=[Math.floor(g/2),e[A],e[r],e[C]],P=[e[l[g]],e[A],e[r],e[C]];o.n++;for(const [name,f] of [["up",1],["down",4]]){let a=U.every((x,k)=>m(e[x]-L[k],5)===f),p=U.every((x,k)=>m(e[x]-P[k],5)===f);o[name][+a+2*+p]++;}
let V=[...U,r],W=[...V,l[g]];for(let y=0;y<12;y++)for(let mo=0;mo<12;mo++)for(let after=0;after<2;after++){let t=m(2-mo-after-d),tags=[y,mo,r,t],k=new Set(tags).size,a=tags.every(x=>U.includes(x)),v=tags.every(x=>V.includes(x)),w=tags.every(x=>W.includes(x));let H=o.heart;H.n++;H.upper+=+a;H.all+=+v;H.full+=+w;H.mask[+a+2*+v+4*+w]++;if(k===4){H.upperDistinct+=+a;H.allDistinct+=+v;H.fullDistinct+=+w}}}
assert.deepEqual(o,{n:720,up:[700,8,3,9],down:[706,0,5,9],heart:{n:207360,upper:1398,all:10626,full:17143,upperDistinct:90,allDistinct:1740,fullDistinct:4268,mask:[190217,0,0,0,6517,0,9228,1398]}});
console.log(JSON.stringify(o,null,2));
