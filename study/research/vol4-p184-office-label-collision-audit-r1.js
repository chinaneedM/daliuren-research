const assert=require('node:assert/strict');
// Abstract calendar label combinations, not actual political institutions or outcomes.
// Month by solar-term boundary; lunar general changes at the middle solar term.
const m=x=>(x%12+12)%12;let counts={},distinct={};
for(let y=0;y<12;y++)for(let b=0;b<12;b++)for(let after=0;after<2;after++){
 const labels=[y,m(y+6),m(2-b-after),b];
 let k=new Set(labels).size;distinct[k]=(distinct[k]||0)+1;
 for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)if(labels[i]===labels[j])counts[`${i},${j}`]=(counts[`${i},${j}`]||0)+1;
}
assert.deepEqual(counts,{"0,3":24,"2,3":24,"0,2":24,"1,3":24,"1,2":24});
assert.deepEqual(distinct,{"2":8,"3":100,"4":180});
console.log(JSON.stringify({counts,distinct},null,2));
