const assert=require('node:assert/strict');
const br="子丑寅卯辰巳午未申酉戌亥",st="甲乙丙丁戊己庚辛壬癸",el=[4,2,0,0,2,1,1,2,3,3,2,4],m=(x,n=12)=>(x%n+n)%n;
const long=[11,2,2,5,8],tai=(e,soil)=>m((e===2?soil:long[e])+10);
const c={metal:0,earth:0,both:0,same:[0,0],soilChanges:0,rows:[]};
for(let i=0;i<60;i++){const a=Math.floor((i%10)/2),b=el[i%12];c.metal+=+(a===3||b===3);c.earth+=+(a===2||b===2);c.both+=+((a===3||b===3)&&(a===2||b===2));for(let k=0;k<2;k++)c.same[k]+=+(tai(a,k===0?2:8)===tai(b,k===0?2:8));c.soilChanges+=+((tai(a,2)===tai(b,2))!==(tai(a,8)===tai(b,8)));}
for(let e=0;e<5;e++){const p=tai(e,2);c.rows.push({phase:"木火土金水"[e],birth:br[long[e]],tai:br[p],relation:["兄弟","子孙","妻财","官鬼","父母"][m(el[p]-e,5)]});}
assert.deepEqual([c.metal,c.earth,c.both,c.same,c.soilChanges],[20,28,6,[18,18],12]);assert.equal(br[tai(2,8)],"午");assert.equal(br[tai(3,2)],"卯");console.log(JSON.stringify(c,null,2));