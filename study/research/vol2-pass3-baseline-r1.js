// Research-only candidate rules; see SESSION-0068 for provenance and exclusions.
function audit(){
const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",L=[2,4,5,7,5,7,8,10,11,1],P=[4,2,0,0,2,1,1,2,3,3,2,4],Q=[0,0,1,1,2,2,3,3,4,4],mod=(n,m=12)=>(n%m+m)%m,ke=(a,b)=>mod(a+2,5)===b,rank=x=>x%3===2?0:x%3===0?1:2;
const rows=[],sum=(a,k)=>{a[k]=(a[k]||0)+1},counts={},sizes={},direct={},amb=[],fallback=[],eightExcluded=[],remoteMulti=[],cases={},check=(ok,msg)=>{if(!ok)throw Error(msg)};
for(let n=0;n<60;n++)for(let d=0;d<12;d++){
const s=n%10,b=n%12,l=L[s],h=x=>mod(x+d),u=[h(l),h(h(l)),h(b),h(h(b))],low=[l,u[0],b,u[2]],lowerPhase=[Q[s],P[u[0]],P[b],P[u[2]]],date=S[s]+B[b],norm=new Set(u.map((v,i)=>low[i]+":"+v)).size,upper=new Set(u).size,written=new Set(u.map((v,i)=>(i===0?"S"+s:"B"+low[i])+":"+v)).size;
const indices=[0,1,2,3],down=indices.filter(i=>ke(lowerPhase[i],P[u[i]])),up=indices.filter(i=>ke(P[u[i]],lowerPhase[i])),ys=indices.filter(i=>ke(P[u[i]],Q[s])),ds=indices.filter(i=>ke(Q[s],P[u[i]])),unique=a=>[...new Set(a.map(i=>u[i]))],best=a=>unique(a.filter(i=>rank(low[i])===Math.min(...a.map(j=>rank(low[j])))));
const select=(a,kind)=>{if(unique(a).length===1)return {first:u[a[0]],stage:"single"};const same=a.filter(i=>u[i]%2===s%2);if(!same.length){if(kind==="direct")fallback.push({date,d,candidates:best(a).map(i=>B[i])});return {stage:"no_parity",candidates:unique(a)}}if(unique(same).length===1)return {first:u[same[0]],stage:"parity"};if(kind==="remote")return {stage:"remote_same_parity",candidates:unique(same)};const v=best(same);return v.length===1?{first:v[0],stage:"mengzhongji"}:{stage:"rank_tie",candidates:v}};
const chain=f=>[f,h(f),h(h(f))],xing=[3,10,5,0,4,8,6,1,2,9,7,11];let branch,sel={},trans;
if(d===0){branch="fuyin";const f=s===9||s===1||s%2===0?u[0]:u[2];const mid=xing[f]===f?(s===1||s%2===0?u[2]:u[0]):xing[f];trans=[f,mid,xing[mid]===mid?mod(mid+6):xing[mid]];}
else if(down.length||up.length){branch=d===6?"fanyin_direct":"direct";sel=select(down.length?down:up,"direct");if(sel.first!==undefined)trans=chain(sel.first);if(d!==6)sum(direct,sel.stage);}
else if(d===6){branch="fanyin_no_direct";trans=[[2,11,8,5][b%4],u[2],u[0]];}
else if(l===b){branch="bazhuan";trans=[s%2===0?mod(u[0]+2):mod(u[3]-2),u[0],u[0]];if(ys.length||ds.length)eightExcluded.push({date,d,ys:unique(ys).map(i=>B[i]),ds:unique(ds).map(i=>B[i])});}
else if(ys.length||ds.length){branch=ys.length?"yaoke_haoshi":"yaoke_danshe";sel=select(ys.length?ys:ds,"remote");if(sel.first!==undefined)trans=chain(sel.first);if(unique(ys.length?ys:ds).length>1)remoteMulti.push({date,d,stage:sel.stage});}
else if(norm===4){branch="maoxing";trans=s%2===0?[h(9),u[2],u[0]]:[mod(9-d),u[0],u[2]];}
else if(norm===3){branch="bieze";trans=[s%2===0?h(L[(s+5)%10]):mod(b+4),u[0],u[0]];}
else branch="unclassified";
const xun=Math.floor(n/10)*10%12,voids=[mod(xun+10),mod(xun+11)],r={date,d,branch,stage:sel.stage||null,lessons:u.map(i=>B[i]).join(""),trans:trans?.map(i=>B[i]).join("")||null,voids:voids.map(i=>B[i]).join(""),norm,upper,written};rows.push(r);sum(counts,branch);sum(sizes,`${norm}/${upper}/${written}`);if(!trans)amb.push({...r,candidates:sel.candidates?.map(i=>B[i])});
if(trans&&["direct","fanyin_direct","yaoke_haoshi","yaoke_danshe"].includes(branch))for(let i=0;i<2;i++)check(voids.includes(trans[i])===voids.includes(mod(trans[i+1]-d)),"void dependency");
}
const vectors={"戊申/1":"戌酉午","丁丑/9":"子辰戌","辛丑/3":"巳丑丑","庚申/3":"丑亥亥","己未/10":"丑巳巳","乙未/0":"辰未丑","乙酉/0":"辰酉卯","壬辰/0":"亥辰戌","辛未/6":"巳丑辰","己丑/4":"酉丑巳","甲午/3":"申亥寅","戊午/1":"寅午午"};
for(const [key,expected] of Object.entries(vectors)){const r=rows.find(x=>x.date+"/"+x.d===key);check(r?.trans===expected,key);cases[key]=r.trans}
for(const [key,expected] of Object.entries({"庚子/11":"未午亥戌","丁亥/5":"子巳辰酉","甲午/3":"巳申酉子"}))check(rows.find(x=>x.date+"/"+x.d===key)?.lessons===expected,key);
const names=["贵人","腾蛇","朱雀","六合","勾陈","青龙","天空","白虎","太常","玄武","太阴","天后"],day=[1,0,11,11,1,0,1,6,5,5],night=[7,8,9,9,7,8,7,2,3,3];let generalInputs=0;
function generals(s,m,h){const d=mod(m-h),g=(h>=3&&h<=8?day:night)[s],e=mod(g-d),dir=e<=4||e===11?1:-1;return B.split("").map((_,i)=>names[mod(dir*(i-g))])}
for(let n=0;n<60;n++)for(let m=0;m<12;m++)for(let h=0;h<12;h++){const d=mod(m-h),g=generals(n%10,m,h);check(mod(h+d)===m,"plate");check(new Set(g).size===12,"generals");check(g[mod(g.indexOf("贵人")+6)]==="天空","opposition");generalInputs++}
check(generals(3,10,5)[11]==="贵人"&&generals(3,10,5)[4]==="白虎","p34");check(generals(0,1,10)[7]==="贵人"&&generals(0,1,10)[8]==="腾蛇"&&generals(0,1,10)[11]==="勾陈"&&generals(0,1,10)[2]==="白虎","p47");
check(rows.length===720&&Object.values(counts).reduce((a,b)=>a+b,0)===720&&!counts.unclassified,"partition");const resolved=rows.filter(r=>r.trans).length;
return {counts,sizes,direct,amb,fallback,remoteMulti,eightExcluded,cases,resolved,generalInputs,voidChainFailures:0,ordinaryStrict:direct.single+direct.parity+direct.mengzhongji,ordinaryWithFallback:direct.single+direct.parity+direct.mengzhongji+fallback.filter(x=>x.d!==6&&x.candidates.length===1).length};
}
console.log(JSON.stringify(audit(), null, 2));
