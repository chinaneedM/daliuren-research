// Structural geometry and role references only, not actual terrain or predictions.
const br="子丑寅卯辰巳午未申酉戌亥",g="贵人 腾蛇 朱雀 六合 勾陈 青龙 天空 白虎 太常 玄武 太阴 天后".split(" "),nb=[[1,7],[0,8],[11,9],[11,9],[1,7],[0,8],[1,7],[6,2],[5,3],[5,3]],e=[4,2,0,0,2,1,1,2,3,3,2,4],m=(x,n=12)=>(x%n+n)%n;
let a={n:0,xuanGround:Array(12).fill(0),nOrient:0,prev:0,next:0,exact:0,other:0,byD:Array.from({length:12},()=>({prev:0,next:0,exact:0,other:0}))};
for(let i=0;i<60;i++)for(let D=0;D<12;D++){let S=m(i%12+D),F=m(S+6),u=m(S+D),v=m(F+D),d=m(v-S),k=d===11?"prev":d===1?"next":d===0?"exact":"other";a.nOrient++;a[k]++;a.byD[D][k]++;for(const N of nb[i%10]){let E=m(N-D),dir=[11,0,1,2,3,4].includes(E)?1:-1;a.n++;a.xuanGround[m(E+dir*9)]++}}
let D=5,N=0,H=x=>m(x+D),P=x=>m(x-D),row=x=>({b:br[x],p:br[P(x)],g:g[m(-x)],dayRel:["兄弟","子孙","妻财","官鬼","父母"][m(e[x],5)],zhiRel:["兄弟","子孙","妻财","官鬼","父母"][m(e[x]-3,5)],xun:m(x-8)<10?"甲乙丙丁戊己庚辛壬癸"[m(x-8)]:null,void:[6,7].includes(x),fall:[6,7].includes(P(x))});
console.log({a,roles:[7,11,8,1,10,0,5,3,2,6,9].map(row),seat:[2,8,H(2),H(8)].map(x=>br[x])});
