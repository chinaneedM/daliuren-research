// Abstract structural audit, not real clinical or divination outcomes.
const assert=require('node:assert/strict');
const P=[2,4,5,7,5,7,8,10,11,1],nb=[[1,7],[0,8],[11,9],[11,9],[1,7],[0,8],[1,7],[6,2],[5,3],[5,3]],m=x=>(x%12+12)%12;
let both=[0,0,0,0],hand=[0,0,0,0],net=[0,0,0,0],snake=[0,0,0,0],kui=0,clash=0;
for(let i=0;i<60;i++)for(let D=0;D<12;D++){
 let g=i%10,R=i%12;hand[+(m(10+D)===3)+2*+(m(3+D)===10)]++;if(m(11+D)===10)kui++;
 if(D===1){for(let y=0;y<12;y++){const Y=m(y+D);net[+(Y===m(P[g]+D+6))+2*+(Y===m(R+D+6))]++;}}
 let sv=[];for(const N of nb[g]){let E=m(N-D),f=[11,0,1,2,3,4].includes(E)?1:-1;sv.push(m(N+f));both[+(E===11)+2*+([2,5,8,11].includes(m(1-D)))]++;if(E===11&&m(11+D)===10)clash++;}
 if(g===2){let a=sv[0]===10,b=sv[1]===10;snake[+a+2*+b]++;}
}
const result={both,hand,net,snake,kui,clash};assert.deepEqual(result,{both:[876,84,444,36],hand:[600,60,60,0],net:[605,55,55,5],snake:[12,24,24,12],kui:60,clash:0});console.log(JSON.stringify(result));
