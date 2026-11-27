const assert=require('node:assert/strict');
const B="子丑寅卯辰巳午未申酉戌亥",G="甲乙丙丁戊己庚辛壬癸";
const a=[["丁丑","午巳子亥","子亥戌",11],["戊午","辰卯巳辰","卯寅丑",11],["庚午","戌子申戌","申戌子",2],["戊寅","戌卯未子","子巳戌",5],["丁巳","辰丑寅亥","亥申巳",9],["丙申","亥巳寅申","寅申寅",6],["戊戌","戌卯卯申","申丑午",5]];
const pure=v=>new Set(v).size===1?(v[0]===0?"阳":"阴"):"混";
const out=a.map(([day,up,t,d])=>({day,d,all:pure([G.indexOf(day[0])%2,B.indexOf(day[1])%2,...[...up+t].map(x=>B.indexOf(x)%2)]),trans:pure([...t].map(x=>B.indexOf(x)%2)),xu:[up.includes("戌"),t.includes("戌")]}));
assert.deepEqual(out.filter(x=>x.all==="阳").map(x=>x.day),["庚午"]);
assert.deepEqual(out.filter(x=>x.trans==="阳").map(x=>x.day),["庚午","丙申"]);
assert.deepEqual(out.filter(x=>x.xu[1]).map(x=>x.day),["丁丑","庚午","戊寅"]);
console.log(JSON.stringify(out,null,2));