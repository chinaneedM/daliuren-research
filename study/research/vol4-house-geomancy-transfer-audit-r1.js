const assert=require('node:assert/strict');
// Abstract structures, not field observations or predictive accuracy.
const b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸";
const m=(x,n=12)=>(x%n+n)%n;
const el=[4,2,0,0,2,1,1,2,3,3,2,4],lod=[2,4,5,7,5,7,8,10,11,1],nb=[[1,7],[0,8],[11,9],[11,9],[1,7],[0,8],[1,7],[6,2],[5,3],[5,3]];
const rel=(x,y)=>["比和","生","克","被克","被生"][m(y-x,5)];
const out={n:0,refMatrix:Array.from({length:5},()=>Array(5).fill(0)),same:0,oppositeGeneration:0,oppositeControl:0,benefitVsControl:0,roleN:0,leftOnly:0,rightOnly:0,both:0,neither:0,examples:[]};
function role(i,D,N){const H=x=>m(x+D),A=H(lod[i%10]),B=H(A),S=H(i%12),Q=H(S),E=m(N-D),dir=[11,0,1,2,3,4].includes(E)?1:-1;return {A,B,S,Q,dragon:H(m(E+dir*5)),tiger:H(m(E+dir*7))}}
for(let i=0;i<60;i++)for(let D=0;D<12;D++){
 const H=x=>m(x+D),A=H(lod[i%10]),S=H(i%12);
 const a=m(Math.floor((i%10)/2)-el[S],5),c=m(el[A]-el[S],5);
 out.n++;out.refMatrix[a][c]++;out.same+=+(a===c);
 out.oppositeGeneration+=+((a===1&&c===4)||(a===4&&c===1));
 out.oppositeControl+=+((a===2&&c===3)||(a===3&&c===2));
 out.benefitVsControl+=+((a===1&&c===2)||(a===2&&c===1));
 if(((a===1&&c===2)||(a===2&&c===1))&&out.examples.length<5)out.examples.push({day:s[i%10]+b[i%12],D,S:b[S],A:b[A],toStem:rel(el[S],Math.floor((i%10)/2)),toFirst:rel(el[S],el[A])});
 for(const N of nb[i%10]){const p=role(i,D,N),l=p.Q===p.dragon,r=p.B===p.tiger;out.roleN++;out[l&&r?"both":l?"leftOnly":r?"rightOnly":"neither"]++;}
}
assert.equal(out.n,720);assert.equal(out.roleN,1440);
assert.deepEqual(out.refMatrix,Array.from({length:5},()=>[32,28,28,28,28]));
assert.deepEqual([out.same,out.oppositeGeneration,out.oppositeControl,out.benefitVsControl],[144,56,56,56]);
assert.deepEqual([out.leftOnly,out.rightOnly,out.both,out.neither],[180,60,12,1188]);
out.cases=[["庚寅",5,7],["癸卯",1,3],["乙酉",5,0]].map(([day,D,N])=>{const i=Array.from({length:60},(_,i)=>i).find(i=>s[i%10]+b[i%12]===day);return {day,D,N:b[N],...Object.fromEntries(Object.entries(role(i,D,N)).map(([k,v])=>[k,b[v]]))}});
console.log(JSON.stringify(out,null,2));