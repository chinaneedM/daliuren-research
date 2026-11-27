// SESSION-0220: finite structural audit, not divination verification.
const r=[2,4,5,7,5,7,8,10,11,1],e=[4,2,0,0,2,1,1,2,3,3,2,4],m=(x,n=12)=>(x%n+n)%n,b="子丑寅卯辰巳午未申酉戌亥",g="甲乙丙丁戊己庚辛壬癸";
let a=[0,0,0,0,0],z=[0,0,0,0,0],zp=[0,0,0,0,0],mat=Array.from({length:5},()=>Array(5).fill(0)),both=[],different=0,c=[0,0,0,0],harm=[];
const hai=new Set(["0,7","1,6","2,5","3,4","8,11","9,10"]);
for(let i=0;i<60;i++){let s=i%10,j=i%12,p=Math.floor(s/2),q=e[j],v=e[r[s]],d=m(j-r[s]),f=m(r[s]-j),h=m(j+d),leak=m(e[h]-e[j],5)===1,ghost=m(e[j]-e[h],5)===2;
a[m(p-q,5)]++;z[m(q-p,5)]++;zp[m(q-v,5)]++;mat[m(q-p,5)][m(q-v,5)]++;if(p!==v)different++;if(d===f)both.push([g[s]+b[j],d,m(p-q,5),m(q-p,5),m(q-v,5)]);c[Number(leak)+2*Number(ghost)]++;
for(let D=0;D<12;D++){let x=m(r[s]+D),y=m(j+D);if(m(x+y)===1&&hai.has([r[s],j].sort((a,b)=>a-b).join(",")))harm.push([g[s]+b[j],D,b[x],b[y]]);}}
console.log({a,z,zp,mat,different,both,c,harm});