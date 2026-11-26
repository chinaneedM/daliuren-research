// Research-only integrated vectors, see SESSION-0097.
function audit(){
 const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",L=[2,4,5,7,5,7,8,10,11,1],P=[4,2,0,0,2,1,1,2,3,3,2,4],Q=[0,0,1,1,2,2,3,3,4,4],G=["贵人","腾蛇","朱雀","六合","勾陈","青龙","天空","白虎","太常","玄武","太阴","天后"],GP=[2,1,1,0,2,0,2,3,2,4,3,4],day=[1,0,11,11,1,0,1,6,5,5],night=[7,8,9,9,7,8,7,2,3,3],birth=[11,2,8,5,8],stages=["长生","沐浴","冠带","临官","帝旺","衰","病","死","墓","绝","胎","养"],R=["兄弟","子孙","妻财","官鬼","父母"],mod=(n,m=12)=>(n%m+m)%m,ke=(a,b)=>mod(a+2,5)===b,rank=x=>x%3===2?0:x%3===0?1:2,rel=(a,b)=>R[mod(b-a,5)],life=(p,b)=>stages[mod(b-birth[p])];
 function chart(date,d,isDay){
 const n=Array.from({length:60},(_,i)=>i).find(i=>S[i%10]+B[i%12]===date),s=n%10,b=n%12,l=L[s],h=x=>mod(x+d),u=[h(l),h(h(l)),h(b),h(h(b))],low=[l,u[0],b,u[2]],p=[Q[s],P[u[0]],P[b],P[u[2]]],idx=[0,1,2,3],down=idx.filter(i=>ke(p[i],P[u[i]])),up=idx.filter(i=>ke(P[u[i]],p[i])),a=down.length?down:up,unique=a=>[...new Set(a.map(i=>u[i]))];let v=unique(a);if(v.length>1){const same=a.filter(i=>u[i]%2===s%2);v=unique(same);if(v.length>1)v=unique(same.filter(i=>rank(low[i])===Math.min(...same.map(j=>rank(low[j])))))}if(v.length!==1)throw Error(date);
 const t=[v[0],h(v[0]),h(h(v[0]))],xun=10*Math.floor(n/10)%12,V=[mod(xun+10),mod(xun+11)],g=(isDay?day:night)[s],e=mod(g-d),dir=e<=4||e===11?1:-1;
 const all=[...new Set([...u,...t])],fields=all.map(k=>{const earth=mod(k-d),gi=mod(dir*(k-g)),xd=mod(k-xun),wd=mod(2*(s%5)+k,10),sources=[...new Set([k,earth].filter(x=>V.includes(x)))];return {branch:B[k],earth:B[earth],roles:[...u.map((z,i)=>z===k?"课"+(i+1):null),...t.map((z,i)=>z===k?["初传","中传","末传"][i]:null)].filter(Boolean),general:G[gi],generalToBranch:rel(GP[gi],P[k]),dayRelative:rel(Q[s],P[k]),xunStem:xd<10?S[xd]:null,xunRelative:xd<10?rel(Q[s],Q[xd]):null,wuStem:S[wd],wuRelative:rel(Q[s],Q[wd]),dayStage:life(Q[s],k),earthStage:life(P[earth],k),ownStage:life(P[k],earth),earthToBranch:rel(P[earth],P[k]),sources:sources.map(x=>B[x]),isXunVoid:V.includes(k),isEarthVoid:V.includes(earth)}});
 return {date,d,isDay,lessons:u.map((z,i)=>B[z]+"/"+(i===0?S[s]:B[low[i]])),down:down.map(i=>i+1),up:up.map(i=>i+1),trans:t.map(z=>B[z]).join(""),noble:B[g],nobleEarth:B[e],direction:dir,voids:V.map(z=>B[z]),fields,roles:7,positions:all.length,fullPlate:B.split("").map((_,i)=>[B[i],B[h(i)],G[mod(dir*(h(i)-g))]])};
 }
 const cases=[chart("癸酉",7,true),chart("丁亥",5,true),chart("丁卯",7,true),chart("丁卯",8,false)];
 if(cases[0].trans!=="卯戌巳"||cases[1].trans!=="巳戌卯"||cases[2].trans!=="戌巳子"||cases[3].trans!=="未卯亥")throw Error("vector");
 for(const c of cases){if(c.fields.reduce((a,b)=>a+b.roles.length,0)!==7)throw Error("roles");for(const f of c.fields){if(f.isXunVoid!==(f.xunStem===null))throw Error("xun null");if(f.sources.length===0&&(f.isEarthVoid||f.isXunVoid))throw Error("source");}}
 return cases;
}
console.log(JSON.stringify(audit(),null,2));
