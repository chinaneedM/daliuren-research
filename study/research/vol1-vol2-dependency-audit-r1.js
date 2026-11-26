// Research only; see SESSION-0096.
function audit(){
const B="子丑寅卯辰巳午未申酉戌亥",S="甲乙丙丁戊己庚辛壬癸",L=[2,4,5,7,5,7,8,10,11,1],P=[4,2,0,0,2,1,1,2,3,3,2,4],Q=[0,0,1,1,2,2,3,3,4,4],mod=(n,m=12)=>(n%m+m)%m,ke=(a,b)=>mod(a+2,5)===b,rank=x=>x%3===2?0:x%3===0?1:2;
const c={},matrix={},ex={},inc=(k,e)=>{c[k]=(c[k]||0)+1;if(e&&!ex[k])ex[k]=e},sum=(o,k)=>o[k]=(o[k]||0)+1;
const seasonA=[4,4,0,0,0,1,1,1,3,3,3,4],seasonB=seasonA.map((p,i)=>i%3===1?2:p),strong=(p,m)=>mod(p-m,5)<=1;
for(let n=0;n<60;n++)for(let d=1;d<12;d++){if(d===6)continue;const s=n%10,b=n%12,l=L[s],h=x=>mod(x+d),u=[h(l),h(h(l)),h(b),h(h(b))],low=[l,u[0],b,u[2]],p=[Q[s],P[u[0]],P[b],P[u[2]]],idx=[0,1,2,3],down=idx.filter(i=>ke(p[i],P[u[i]])),up=idx.filter(i=>ke(P[u[i]],p[i])),a=down.length?down:up,unique=a=>[...new Set(a.map(i=>u[i]))];let v=unique(a);if(v.length>1){const same=a.filter(i=>u[i]%2===s%2);v=unique(same);if(v.length>1)v=unique(same.filter(i=>rank(low[i])===Math.min(...same.map(j=>rank(low[j])))))}if(v.length!==1)continue;
const t=[v[0],h(v[0]),h(h(v[0]))],all=[...new Set([...u,...t])],xun=10*Math.floor(n/10)%12,V=[mod(xun+10),mod(xun+11)],src=z=>[...new Set([z,mod(z-d)].filter(x=>V.includes(x)))],ghost=t.filter(z=>ke(P[z],Q[s])),child=all.filter(z=>mod(Q[s]+1,5)===P[z]),e={date:S[s]+B[b],d,u:u.map(z=>B[z]).join(""),t:t.map(z=>B[z]).join(""),ghost:ghost.map(z=>[B[z],src(z).map(x=>B[x])]),child:child.map(z=>[B[z],src(z).map(x=>B[x])])};
inc("ordinary");if(!ghost.length)continue;inc("ghostCharts");if(!child.length)continue;inc("bothCharts");
const gSolid=ghost.filter(z=>!src(z).length),kSolid=child.filter(z=>!src(z).length);
if(gSolid.length&&kSolid.length)inc("bothSolidCharts",e);
if(!gSolid.length&&!kSolid.length){inc("bothAllVoid",e);const gsrc=new Set(ghost.flatMap(src)),ksrc=new Set(child.flatMap(src));if([...gsrc].some(z=>ksrc.has(z)))inc("bothAllVoidShared",e);}
for(const g of ghost)for(const k of child){if(!ke(P[k],P[g]))throw Error("child controls ghost");inc("pairs");const gs=src(g),ks=src(k),shared=gs.some(z=>ks.includes(z));if(shared)inc("sharedPair",e);if(!gs.length&&!ks.length)inc("bothSolidPair",e);}
for(const z of V){const remains=x=>src(x).filter(y=>y!==z).length===0,gr=ghost.filter(remains),kr=child.filter(remains);inc("interventions");const dg=gr.length>gSolid.length,dk=kr.length>kSolid.length;if(dg||dk)inc("changes");if(dg&&dk)inc("bothGain", {...e,removed:B[z]});if(dg&&!dk)inc("ghostGainOnly",{...e,removed:B[z]});if(!dg&&dk)inc("childGainOnly",{...e,removed:B[z]});}
for(let m=0;m<12;m++){const ga=strong(P[ghost[0]],seasonA[m]),ka=strong(P[child[0]],seasonA[m]),gb=strong(P[ghost[0]],seasonB[m]),kb=strong(P[child[0]],seasonB[m]);if(ga&&ka||gb&&kb)throw Error("strong coexist");const a=Number(ga)+""+Number(ka),b=Number(gb)+""+Number(kb);sum(matrix,"all/A/"+a);sum(matrix,"all/B/"+b);if(a!==b)inc("seasonChanged",{...e,month:B[m],a,b});if(gSolid.length&&kSolid.length){sum(matrix,"solid/A/"+a);sum(matrix,"solid/B/"+b);if(a!==b)inc("solidSeasonChanged",{...e,month:B[m],a,b});}}
}return {c,matrix,ex};}
console.log(JSON.stringify(audit(),null,2));
