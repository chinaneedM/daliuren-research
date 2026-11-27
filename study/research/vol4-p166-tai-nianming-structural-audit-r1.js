const assert=require('node:assert/strict');
const b="子丑寅卯辰巳午未申酉戌亥",m=(x,n=12)=>(x%n+n)%n,el=[4,2,0,0,2,1,1,2,3,3,2,4],tai=[9,0,0,3,6];
const groups={soilZi:[0,0,0,0],soilWu:[0,0,0,0],soilBoth:[0,0,0,0]};
let contrast={n:0,stemOrBranchSame:0,upperMatch:0,both:0,onlySelf:0,onlyUpper:0};
for(let i=0;i<60;i++){let a=Math.floor(i%10/2),z=el[i%12];for(const [k,soil] of [["soilZi",[0]],["soilWu",[6]],["soilBoth",[0,6]]]){let T=new Set([...(a===2?soil:[tai[a]]),...(z===2?soil:[tai[z]])]);groups[k][T.size]++;if(k==="soilZi")for(let D=0;D<12;D++)for(let N=0;N<12;N++){const A=T.has(N),B=T.has(m(N+D));contrast.n++;contrast.stemOrBranchSame+=+A;contrast.upperMatch+=+B;contrast.both+=+(A&&B);contrast.onlySelf+=+(A&&!B);contrast.onlyUpper+=+(B&&!A);}}}
const case1={day:"乙卯",D:9,upper:b[m(3+9)],stemUpper:b[m(4+9)],noble:"子",nobleGround:b[m(0-9)],monthGeneral:"子",hour:b[m(0-9)],void:["子","丑"]};
const case2={day:"壬申",D:m(5-7),husbandUpper:b[m(2+10)],wifeUpper:b[m(11+10)],husbandYear:"甲寅",wifeYear:"己亥"};
assert.deepEqual(groups,{soilZi:[0,18,42,0],soilWu:[0,18,42,0],soilBoth:[0,8,40,12]});
assert.deepEqual(contrast,{n:8640,stemOrBranchSame:1224,upperMatch:1224,both:186,onlySelf:1038,onlyUpper:1038});
assert.equal(case1.upper,"子");assert.equal(case1.hour,"卯");assert.equal(case2.husbandUpper,"子");assert.equal(case2.wifeUpper,"酉");
console.log(JSON.stringify({groups,contrast,case1,case2},null,2));