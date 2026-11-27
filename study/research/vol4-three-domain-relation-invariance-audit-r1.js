const assert=require('node:assert/strict');
// Pure symbolic structure, not predictive or clinical validation.
const e=[4,2,0,0,2,1,1,2,3,3,2,4],l=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n;
const b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸";
let o={n:0,eq:[0,0,0,0],chong:[0,0,0,0],he:[0,0,0,0],tri:[0,0,0,0],phase:Array.from({length:5},()=>Array(5).fill(0)),reverse:0,heByD:Array(12).fill(0)};
const rel=(a,b)=>m(e[b]-e[a],5);
for(let i=0;i<60;i++)for(let d=0;d<12;d++){const a=l[i%10],b=i%12,A=m(a+d),B=m(b+d),mask=(x,y)=>+x+2*+y;o.n++;o.eq[mask(a===b,A===B)]++;o.chong[mask(m(a-b)===6,m(A-B)===6)]++;o.he[mask(m(a+b)===1,m(A+B)===1)]++;o.tri[mask(a!==b&&m(a-b)%4===0,A!==B&&m(A-B)%4===0)]++;const p=rel(a,b),q=rel(A,B);o.phase[p][q]++;if((p===1&&q===4)||(p===4&&q===1)||(p===2&&q===3)||(p===3&&q===2))o.reverse++;if(m(a+b)===1&&m(A+B)===1)o.heByD[d]++;}
assert.deepEqual(o,{n:720,eq:[660,0,0,60],chong:[660,0,0,60],he:[610,50,50,10],tri:[600,0,0,120],phase:[[100,18,22,22,18],[16,40,34,29,25],[16,37,31,26,22],[12,23,33,35,29],[16,22,20,28,46]],reverse:106,heByD:[5,0,0,0,0,0,5,0,0,0,0,0]});
// Five printed cases: transmissions are preserved input witnesses, not a nine-method implementation.
const cases=[[27,0,"卯子卯"],[21,0,"辰酉卯"],[37,11,"子亥戌"],[13,2,"酉亥丑"],[27,3,"酉子卯"]];
const rows=cases.map(([i,d,T])=>{let a=m(l[i%10]+d),c=m(i%12+d),U=[a,m(a+d),c,m(c+d)],k=Math.floor(i/10)*10%12,E=[m(k+10),m(k+11)],L=E.map(x=>m(x+d));return {day:s[i%10]+b[i%12],d,U:U.map(x=>b[x]).join(""),T,void:E.map(x=>b[x]).join(""),landing:L.map(x=>b[x]).join(""),mask:[...T].map(x=>+E.includes(b.indexOf(x))+2*+L.includes(b.indexOf(x)))}});assert.deepEqual(rows.map(x=>[x.U,x.void,x.landing,x.mask]),[["戌戌卯卯","午未","午未",[0,0,0]],["辰辰酉酉","午未","午未",[0,0,0]],["酉申子亥","辰巳","卯辰",[0,0,0]],["酉亥卯巳","申酉","戌亥",[1,2,0]],["丑辰午酉","午未","酉戌",[2,0,0]]]);console.log(JSON.stringify({o,rows},null,2));
