// Abstract orientation and element relations, not empirical predictions.
const m=(x,n=12)=>(x%n+n)%n,e=[4,2,0,0,2,1,1,2,3,3,2,4],lod=[2,4,5,7,5,7,8,10,11,1],br="子丑寅卯辰巳午未申酉戌亥",gs="甲乙丙丁戊己庚辛壬癸";
let a={total:0,faceVsSeat:[0,0,0,0,0],faceVsDay:[0,0,0,0,0],faceVsBranch:[0,0,0,0,0],faceDayBranchDifferent:0,seatGenDayUpperFaceClashDay:0,faceDayAndBranchOpposed:0,examples:[]};
for(let i=0;i<60;i++)for(let D=0;D<12;D++){let s=i%10,b=i%12,A=m(lod[s]+D),S=m(b+D),F=m(S+6),p=Math.floor(s/2),r=m(e[F]-p,5),q=m(e[F]-e[b],5);a.total++;a.faceVsSeat[m(e[F]-e[S],5)]++;a.faceVsDay[r]++;a.faceVsBranch[q]++;a.faceDayBranchDifferent+=+(r!==q);a.seatGenDayUpperFaceClashDay+=+(m(e[S]-e[A],5)===4&&r===3);if((r===4&&q===3)||(r===3&&q===4)){a.faceDayAndBranchOpposed++;if(a.examples.length<3)a.examples.push({day:gs[s]+br[b],D,A:br[A],S:br[S],F:br[F],r,q})}}
console.log(a);
