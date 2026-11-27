const assert=require('node:assert/strict');
const l=[2,4,5,7,5,7,8,10,11,1],lu=[2,3,5,6,5,6,8,9,11,0],ma=[2,11,8,5],b="子丑寅卯辰巳午未申酉戌亥",s="甲乙丙丁戊己庚辛壬癸",m=x=>(x%12+12)%12;
let o={total:720,lu:0,ma:0,both:0,rich:[],void:0,landing:0,richVoid:0,richLanding:0};
for(let i=0;i<60;i++)for(let d=0;d<12;d++){let g=i%10,r=i%12,h=x=>m(x+d),a=h(l[g]),c=h(r),xun=m(r-g),E=[m(xun+10),m(xun+11)],F=E.map(h),L=c===lu[g],M=a===ma[r%4];if(L){o.lu++;o.void+=+E.includes(c);o.landing+=+F.includes(c)}if(M)o.ma++;if(L&&M){o.both++;o.richVoid+=+[a,c].some(x=>E.includes(x));o.richLanding+=+[a,c].some(x=>F.includes(x));o.rich.push({day:s[g]+b[r],d,A:b[a],C:b[c],void:E.map(x=>b[x]).join(""),landing:F.map(x=>b[x]).join("")})}}
assert.deepEqual([o.lu,o.ma,o.both,o.void,o.landing,o.richVoid,o.richLanding],[60,60,6,10,0,4,2]);assert.deepEqual(o.rich.map(x=>x.day),["丙寅","壬申","戊寅","丙申","壬寅","戊申"]);console.log(JSON.stringify(o,null,2));
