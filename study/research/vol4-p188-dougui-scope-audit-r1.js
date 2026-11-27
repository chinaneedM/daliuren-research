const assert=require('node:assert/strict');
// Abstract day, rotation and a single queried year/life branch; not observed dates or outcomes.
const b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸",l=[2,4,5,7,5,7,8,10,11,1];
let o={n:0,geo:0,gan:0,zhi:0,year:0,ganStems:{},zhiBranches:{},mask:Array(8).fill(0)};
for(let i=0;i<60;i++)for(let d=0;d<12;d++)for(let y=0;y<12;y++){let g=i%10,r=i%12;o.n++;let geo=d===6,gan=geo&&[1,7].includes(l[g]),zhi=geo&&[1,7].includes(r),year=geo&&[1,7].includes(y);o.geo+=+geo;o.gan+=+gan;o.zhi+=+zhi;o.year+=+year;o.mask[+gan+2*+zhi+4*+year]++;if(gan)o.ganStems[s[g]]=(o.ganStems[s[g]]??0)+1;if(zhi)o.zhiBranches[b[r]]=(o.zhiBranches[b[r]]??0)+1;}
assert.deepEqual(o,{n:8640,geo:720,gan:216,zhi:120,year:120,ganStems:{"丁":72,"己":72,"癸":72},zhiBranches:{"丑":60,"未":60},mask:[8300,120,40,60,76,24,8,12]});console.log(JSON.stringify(o,null,2));
