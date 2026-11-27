const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",G="甲乙丙丁戊己庚辛壬癸",J=["贵人","腾蛇","朱雀","六合","勾陈","青龙","天空","白虎","太常","玄武","太阴","天后"],E=[4,2,0,0,2,1,1,2,3,3,2,4],L=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n;
let counts=[0,0,0,0],overlap=[];
for(let i=0;i<60;i++)for(let d=0;d<12;d++){let g=i%10,b=i%12,k=L[g],c=m(Math.floor(g/2)-E[b],5)===2,a=c&&m(b+d)===k,u=c&&m(k+d)===b;counts[+a+2*+u]++;if(a&&u)overlap.push([G[g]+B[b],d]);}
assert.deepEqual(counts,[699,9,9,3]);assert.deepEqual(overlap,[["癸未",6],["甲申",6],["癸丑",0]]);
const H=x=>m(x+2),lows=[8,10,6,8],ups=lows.map(H),V=[10,11],a=1;
const row=x=>({branch:B[x],general:J[m(x-a)],stem:V.includes(x)?null:G[x%10],ground:B[m(x-2)],void:V.includes(x),fallen:V.includes(m(x-2)),relative:["兄弟","子孙","妻财","官鬼","父母"][m(E[x]-3,5)]});
assert.deepEqual(ups,[10,0,8,10]);
const lower=[3,2,1,3];assert.deepEqual(ups.map((x,k)=>m(E[x]-lower[k],5)===2),[false,true,true,false]);
assert.deepEqual([8,10,0].map(row).map(x=>[x.branch,x.general,x.stem,x.void,x.fallen]),[["申","白虎","壬",false,false],["戌","玄武",null,true,false],["子","天后","甲",false,true]]);
assert.equal(row(1).fallen,true);assert.equal(row(1).void,false);
let dates=[];for(let t=Date.UTC(2002,5,1);t<=Date.UTC(2002,6,31);t+=86400000)if(m(t/86400000+2440588+49,60)===6)dates.push(new Date(t).toISOString().slice(0,10));
assert.deepEqual(dates,["2002-07-01"]);assert.deepEqual([B[m(6-2)],B[m(6+4)]],["辰","戌"]);
console.log(JSON.stringify({counts,overlap,lessons:ups.map(row),trans:[8,10,0].map(row),plate:[...B].map((_,x)=>row(x)),dates},null,2));