// Original printed case, chapter-one candidate, and a conditional alternative input.
// Not empirical validation, not a ruling on historical versions.
const b="子丑寅卯辰巳午未申酉戌亥",g="贵人 腾蛇 朱雀 六合 勾陈 青龙 天空 白虎 太常 玄武 太阴 天后".split(" "),e=[4,2,0,0,2,1,1,2,3,3,2,4],m=(x,n=12)=>(x%n+n)%n,rels=["兄弟","子孙","妻财","官鬼","父母"];
function calc(dayb,D,N){let s=9,H=x=>m(x+D),P=x=>m(x-D),dir=[11,0,1,2,3,4].includes(P(N))?1:-1,G=x=>g[m(dir*(x-N))],vs=[m(dayb-s+10),m(dayb-s+11)],A=H(1),S=H(dayb),p=[A,H(A),S,H(S)],lo=[4,e[A],e[dayb],e[S]],r=p.map((x,j)=>m(e[x]-lo[j],5)),row=x=>({branch:b[x],ground:b[P(x)],general:G(x),dayRelation:rels[m(e[x]-4,5)],branchRelation:rels[m(e[x]-e[dayb],5)],void:vs.includes(x),fallen:vs.includes(P(x))});return {day:"癸"+b[dayb],D,noble:b[N],nobleGround:b[P(N)],dir,void:vs.map(x=>b[x]),lessons:p.map(row),r,all:Array.from({length:12},(_,x)=>row(x)),trans:dayb===3?[4,5,6].map(row):null}}
let a=calc(3,1,3),c=calc(3,1,5),v=calc(11,4,3);
console.log({original:a,chapter1:c,variantConditional:{day:v.day,D:v.D,noble:v.noble,void:v.void,lessons:v.lessons,r:v.r},generalDiff:a.all.filter((x,i)=>x.general!==c.all[i].general).length});
