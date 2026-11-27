const assert=require('node:assert/strict');
// Symbolic attributes only, not biological or predictive outputs.
const lod=[2,4,5,7,5,7,8,10,11,1];let x={n:0,gang:[0,0],gangMatch:[0,0],allUpper:{pureFull:0,pureRepeat:0,mixedFull:0,mixedRepeat:0}};
for(let i=0;i<60;i++)for(let d=0;d<12;d++){const H=p=>(p+d)%12,A=H(lod[i%10]),S=H(i%12),U=[A,H(A),S,H(S)],pure=new Set(U.map(p=>p%2)).size===1,full=new Set(U).size===4;x.n++;x.allUpper[(pure?"pure":"mixed")+(full?"Full":"Repeat")]++;if(A===4){x.gang[i%2]++;x.gangMatch[+(i%2===A%2)]++;}}
assert.deepEqual(x,{n:720,gang:[30,30],gangMatch:[30,30],allUpper:{pureFull:80,pureRepeat:100,mixedFull:420,mixedRepeat:120}});console.log(JSON.stringify(x,null,2));