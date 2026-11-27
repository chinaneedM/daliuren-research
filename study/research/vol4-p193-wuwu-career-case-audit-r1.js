const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",G="甲乙丙丁戊己庚辛壬癸";
const J=["贵人","腾蛇","朱雀","六合","勾陈","青龙","天空","白虎","太常","玄武","太阴","天后"];
const E=[4,2,0,0,2,1,1,2,3,3,2,4],L=[2,4,5,7,5,7,8,10,11,1],m=(x,n=12)=>(x%n+n)%n;
const day=m(Math.floor(Date.UTC(2002,7,18)/86400000)+2440588+49,60),g=day%10,b=day%12,d=-1,H=x=>m(x+d);
assert.equal(day,54);
const lows=[L[g],H(L[g]),b,H(b)],ups=lows.map(H),lowerElements=lows.map((x,k)=>k===0?Math.floor(g/2):E[x]);
assert.deepEqual(ups,[4,3,5,4]);
const lowerKe=ups.map((x,k)=>m(E[x]-lowerElements[k],5)===2),upperKe=ups.map((x,k)=>m(E[x]-lowerElements[k],5)===3);
assert.deepEqual(lowerKe,[false,false,false,false]);assert.deepEqual(upperKe,[false,true,false,false]);
const a=1,dir=[11,0,1,2,3,4].includes(m(a-d))?1:-1,V=[m(b-g+10),m(b-g+11)];
const row=x=>({branch:B[x],general:J[m((x-a)*dir)],stem:V.includes(x)?null:G[m(x-(b-g))],ground:B[m(x-d)],void:V.includes(x),fallen:V.includes(m(x-d)),relative:["兄弟","子孙","妻财","官鬼","父母"][m(E[x]-Math.floor(g/2),5)]});
const trans=[ups[1],H(ups[1]),H(H(ups[1]))].map(row);
assert.deepEqual(trans.map(x=>[x.branch,x.general,x.stem,x.void,x.fallen]),[["卯","朱雀","乙",false,false],["寅","腾蛇","甲",false,false],["丑","贵人",null,true,false]]);
assert.deepEqual(V,[0,1]);assert.deepEqual([...B].map((_,x)=>x).filter(x=>row(x).fallen),[0,11]);
assert.equal(m(4-8),8); // 辰 is tomb under the book's water-earth lifecycle.
assert.equal(H(b),L[g]);assert.equal(ups[0],ups[3]);assert.equal(lows[0],lows[3]);
assert.equal(m(E[1]-E[2],5),2);assert.equal(m(E[1]-E[3],5),2); // wood controls earth
let count=0,hit=0,same=0,intersection=0,d11=0;
for(let i=0;i<60;i++){let k=i%10;if(k%2)continue;for(let D=0;D<12;D++){count++;let p=m(i%12+D),A=p===L[k],C=m(L[k]+D)===m(i%12+2*D);hit+=+A;same+=+C;intersection+=+(A&&C);d11+=+(D===11&&A);assert.equal(A,C);}}
assert.deepEqual([count,hit,same,intersection,d11],[360,30,30,30,3]);
console.log(JSON.stringify({day,lessons:ups.map(row),trans,plate:[...B].map((_,x)=>row(x)),count,hit,same,intersection,d11},null,2));
