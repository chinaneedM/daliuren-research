const assert=require('node:assert/strict');
// Symbolic lifecycle and plate-direction sensitivity only; no calendar or medical outputs.
const br="子丑寅卯辰巳午未申酉戌亥",el=[4,2,0,0,2,1,1,2,3,3,2,4],m=x=>(x%12+12)%12;
let rows=[];for(const soil of [2,8]){let birth=[11,2,soil,5,8],o={soil:br[soil],n:0,sameOrigin:0,directionSame:0,firstUnique:0};let vals=new Set();for(let e=0;e<5;e++){const T=m(birth[e]+10),L=birth[el[T]];for(let D=0;D<12;D++){o.n++;const r=m(L-D);o.sameOrigin+=+(r===m(birth[e]-D));o.directionSame+=+(r===m(L+D));vals.add(r);}}o.firstUnique=vals.size;rows.push(o)}
assert.deepEqual(rows,[{soil:"寅",n:60,sameOrigin:0,directionSame:10,firstUnique:12},{soil:"申",n:60,sameOrigin:0,directionSame:10,firstUnique:12}]);console.log(JSON.stringify(rows,null,2));