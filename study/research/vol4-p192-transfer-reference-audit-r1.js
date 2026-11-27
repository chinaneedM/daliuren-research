const assert=require('node:assert/strict');
// Candidate Jinzhen day/night table and mutually exclusive earth-palace direction.
// Abstract configurations, not an empirical career model.
const e=[4,2,0,0,2,1,1,2,3,3,2,4],N=[[1,7],[0,8],[11,9],[11,9],[1,7],[0,8],[1,7],[6,2],[5,3],[5,3]],m=(x,n=12)=>(x%n+n)%n;let out={};
for(const [name,k,base] of [["青龙",5,0],["太常",8,2]]){
 let v={n:0,bodyVsCarrier:[0,0,0,0],carrierVsGround:[0,0,0,0],relDiff:0,carrierVoid:0,groundVoid:0,bothVoid:0};
 const inside=(phase,g)=>[0,1,2].includes(m(g-phase,5));
 for(let i=0;i<60;i++)for(let d=0;d<12;d++)for(let n=0;n<2;n++){let g=i%10,f=Math.floor(g/2),a=N[g][n],dir=[11,0,1,2,3,4].includes(m(a-d))?1:-1,c=m(a+dir*k),p=m(c-d),x=m(i%12-g),E=[m(x+10),m(x+11)];v.n++;let B=inside(base,f),C=inside(e[c],f),P=inside(e[p],f);v.bodyVsCarrier[+B+2*+C]++;v.carrierVsGround[+C+2*+P]++;v.relDiff+=+(e[c]!==base);v.carrierVoid+=+E.includes(c);v.groundVoid+=+E.includes(p);v.bothVoid+=+(E.includes(c)&&E.includes(p));}
 out[name]=v;
}
assert.deepEqual(out,{"青龙":{n:1440,bodyVsCarrier:[108,360,468,504],carrierVsGround:[198,378,270,594],relDiff:1188,carrierVoid:240,groundVoid:240,bothVoid:40},"太常":{n:1440,bodyVsCarrier:[252,252,324,612],carrierVsGround:[246,330,258,606],relDiff:936,carrierVoid:240,groundVoid:240,bothVoid:40}});
const examples=[{day:"丙寅",base:5,ground:8,upper:1,carrier:4,d:8,printed:3},{day:"戊辰",base:4,ground:9,upper:1,carrier:6,d:9,printed:4}];
for(const a of examples){assert.equal(m(a.base+a.d),a.upper);assert.equal(m(a.ground+a.d),a.carrier);}
assert.deepEqual(examples.map(a=>m(a.ground-a.base)),[3,5]);console.log(JSON.stringify({out,examples},null,2));
