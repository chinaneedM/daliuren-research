// Four-lesson directed overcoming, structural audit only.
const e=[4,2,0,0,2,1,1,2,3,3,2,4],lod=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n,br="子丑寅卯辰巳午未申酉戌亥",gs="甲乙丙丁戊己庚辛壬癸";
let a={total:0,any:0,upperOnly:0,lowerOnly:0,both:0,none:0,slots:[0,0,0,0,0],sameEdgeRepeated:0,anyUpper:0,anyLower:0,examples:{}};
for(let i=0;i<60;i++)for(let D=0;D<12;D++){const s=i%10,b=i%12,A=m(lod[s]+D),S=m(b+D),p=[A,m(A+D),S,m(S+D)],lo=[Math.floor(s/2),e[A],e[b],e[S]],lowerIds=["stem:"+s,"branch:"+A,"branch:"+b,"branch:"+S],rs=p.map((x,j)=>m(e[x]-lo[j],5)),U=rs.includes(3),L=rs.includes(2),count=rs.filter(x=>x===2||x===3).length,k=U?(L?"both":"upperOnly"):(L?"lowerOnly":"none");a.total++;a[k]++;a.any+=+(U||L);a.anyUpper+=+U;a.anyLower+=+L;a.slots[count]++;const edges=p.flatMap((x,j)=>rs[j]===2||rs[j]===3?[lowerIds[j]+"/branch:"+x+"/"+rs[j]]:[]);a.sameEdgeRepeated+=+(edges.length!==new Set(edges).size);if(!a.examples[k])a.examples[k]={day:gs[s]+br[b],D,upper:p.map(x=>br[x]),r:rs};}
console.log(a);
