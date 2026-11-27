// Abstract structural audit only; not a medical or predictive rule.
const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",E=[4,2,0,0,2,1,1,2,3,3,2,4],mod=(x,n=12)=>(x%n+n)%n,ke=(a,b)=>mod(b-a,5)===2;
const sets=[["壬辰","午","亥"],["癸巳","午","丑"],["庚戌","卯","申"],["辛亥","卯","戌"],["戊午","子","巳"],["己未","子","未"],["甲戌","酉","巳午"],["乙亥","酉","巳午"],["丙辰","子","辰戌丑未"],["丁巳","子","辰戌丑未"]];
let rows=[];
for(const [day,hs,ls] of sets){
 let g=S.indexOf(day[0]),z=B.indexOf(day[1]),i=Array.from({length:60},(_,i)=>i).find(i=>i%10===g&&i%12===z),h=B.indexOf(hs);
 for(const l0 of ls){let l=B.indexOf(l0),q=mod(i-i%10);rows.push({day,h:hs,l:l0,empty:mod(h-q)>=10,landEmpty:mod(l-q)>=10,lowerKe:ke(E[l],E[h]),upperKe:ke(E[h],E[l]),dayKe:ke(Math.floor(g/2),E[h]),d:mod(h-l)});}
}
const counts={n:rows.length,empty:rows.filter(x=>x.empty).length,landEmpty:rows.filter(x=>x.landEmpty).length,lowerKe:rows.filter(x=>x.lowerKe).length,upperKe:rows.filter(x=>x.upperKe).length,dayKe:rows.filter(x=>x.dayKe).length,union:rows.filter(x=>x.lowerKe||x.dayKe).length};
assert.deepEqual(counts,{n:18,empty:18,landEmpty:2,lowerKe:15,upperKe:2,dayKe:6,union:18});
let monthly=[];
for(let m=0;m<12;m++){
 let bs=mod(1+m),bj=mod(1+Math.floor(m/2)+6*(m%2)),yan=mod(10-m),alive=m,dead=mod(m+6);
 monthly.push({m:m+1,bs:B[bs],bj:B[bj],yan:B[yan],alive:B[alive],dead:B[dead],two:bs===bj,ya:yan===alive,yd:yan===dead,by:bj===yan});
}
for(const [k,v] of [["two",[1,12]],["ya",[6,12]],["yd",[3,9]],["by",[7]]])assert.deepEqual(monthly.filter(x=>x[k]).map(x=>x.m),v);
let domains=[];
for(const T of [[9,0,0,3,6],[9,0,6,3,6]]){let a=[0,0,0,0],n=0;for(let i=0;i<60;i++){let e=Math.floor((i%10)/2),h=T[e],q=mod(i-i%10);if(mod(h-q)<10)continue;for(let l=0;l<12;l++){n++;a[+ke(E[l],E[h])+2*+ke(e,E[h])]++;}}domains.push({T,n,a});}
assert.deepEqual(domains.map(x=>[x.n,x.a]),[[120,[36,12,56,16]],[120,[56,16,40,8]]]);
console.log(JSON.stringify({rows,counts,monthly,domains},null,2));
