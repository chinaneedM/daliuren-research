// Research-only: no clinical or prediction inference. Wood/fire/earth/metal/water=0..4.
const assert=require('node:assert/strict');
const stems=[0,0,1,1,2,2,3,3,4,4], branches=[4,2,0,0,2,1,1,2,3,3,2,4];
const relation=(a,b)=>(b-a+5)%5; // siblings, offspring, wealth, officer, parent
const tai=[9,0,0,3,6]; // wood you, fire zi, earth zi candidate, metal mao, water wu
let same=0,diff=0,daySame=0,dayDiff=0,opp=0,distinct=0,stemTaiDiff=0,branchTaiDiff=0,both=0;
for(let i=0;i<60;i++){
 const a=stems[i%10], b=branches[i%12], t=tai[a],u=tai[b];
 if(a===b)daySame++;else dayDiff++;
 for(let j=0;j<12;j++){if(relation(a,branches[j])===relation(b,branches[j]))same++;else diff++;}
 if(t!==u)distinct++;
 if((t-u+12)%12===6)opp++;
 if(relation(a,branches[t])!==relation(b,branches[t]))stemTaiDiff++;
 if(relation(a,branches[u])!==relation(b,branches[u]))branchTaiDiff++;
 for(let m=0;m<12;m++)if(t===(m+6)%12&&u===m)both++;
}
const result={daySame,dayDiff,same,diff,distinct,opp,stemTaiDiff,branchTaiDiff,both};
assert.deepEqual(result,{daySame:12,dayDiff:48,same:144,diff:576,distinct:42,opp:14,stemTaiDiff:48,branchTaiDiff:48,both:14});
console.log(JSON.stringify(result));
