function B2(){}
function w2(){}
function UWb(){}
function nXb(){}
function mXb(){}
function pXb(){}
function tXb(){}
function sXb(){}
function gXb(b){if(b==YWb){return true}vw();return b==_Wb}
function hXb(b){if(b==XWb){return true}vw();return b==WWb}
function qXb(b){this.c=(bZb(),YYb).b;this.e=(kZb(),jZb).b;this.b=b}
function iXb(){aXb();bSb.call(this);this.c=(bZb(),YYb);this.d=(kZb(),jZb);this.f[ywc]=0;this.f[zwc]=0}
function eXb(b,c){var d;d=jE(b.L,119);d.c=c.b;!!d.d&&(d.d[wwc]=c.b,undefined)}
function fXb(b,c){var d;d=jE(b.L,119);d.e=c.b;!!d.d&&(d.d.style[xwc]=c.b,undefined)}
function aXb(){aXb=dsc;VWb=new nXb;YWb=new nXb;XWb=new nXb;WWb=new nXb;ZWb=new nXb;$Wb=new nXb;_Wb=new nXb}
function D2(){z2=new B2;ci((ai(),_h),28);!!$stats&&$stats(Ji(rCc,Hsc,-1,-1));z2.Pd();!!$stats&&$stats(Ji(rCc,Txc,-1,-1))}
function bXb(b,c,d){var e;if(d==VWb){if(c==b.b){return}else if(b.b){throw new Pgc('Only one CENTER widget may be added')}}fe(c);o9b(b.k,c);d==VWb&&(b.b=c);e=new qXb(d);c.L=e;eXb(c,b.c);fXb(c,b.d);dXb(b);he(c,b)}
function cXb(b,c){var d,e,f,g,i,j,k,n;I8b(b.N,Dsc,c);j=new lpc;k=new z9b(b.k);while(k.b<k.c.d-1){d=y9b(k);i=jE(d.L,119).b;f=jE(j.ed(i),10);e=!f?1:f.b;g=i==ZWb?'north'+e:i==$Wb?'south'+e:i==_Wb?'west'+e:i==WWb?'east'+e:i==YWb?'linestart'+e:i==XWb?'lineend'+e:ewc;I8b((n=d.N.parentNode,(!n||n.nodeType!=1)&&(n=null),n),c,g);j.gd(i,jhc(e+1))}}
function dXb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;c=b.e;while(mQb(c)>0){c.removeChild(lQb(c,0))}r=1;f=1;for(j=new z9b(b.k);j.b<j.c.d-1;){e=y9b(j);g=jE(e.L,119).b;g==ZWb||g==$Wb?++r:(g==WWb||g==_Wb||g==YWb||g==XWb)&&++f}s=aE(WW,{17:1},67,r,0);for(i=0;i<r;++i){s[i]=new tXb;s[i].c=$doc.createElement(uwc);c.appendChild(s[i].c)}n=0;o=f-1;p=0;t=r-1;d=null;for(j=new z9b(b.k);j.b<j.c.d-1;){e=y9b(j);k=jE(e.L,119);u=$doc.createElement(vwc);k.d=u;k.d[wwc]=k.c;k.d.style[xwc]=k.e;k.d[Utc]=Dsc;k.d[Vtc]=Dsc;if(k.b==ZWb){pQb(s[p].c,u,s[p].b);u.appendChild(e.N);u[Zyc]=o-n+1;++p}else if(k.b==$Wb){pQb(s[t].c,u,s[t].b);u.appendChild(e.N);u[Zyc]=o-n+1;--t}else if(k.b==VWb){d=u}else if(gXb(k.b)){q=s[p];pQb(q.c,u,q.b++);u.appendChild(e.N);u[sCc]=t-p+1;++n}else if(hXb(k.b)){q=s[p];pQb(q.c,u,q.b);u.appendChild(e.N);u[sCc]=t-p+1;--o}}if(b.b){q=s[p];pQb(q.c,d,q.b);d.appendChild(b.b.N)}}
function A2(){var b,c,d,e;while(x2){b=x2;x2=x2.c;!x2&&(y2=null);mdb(b.b.b,(d=new iXb,d.N[ysc]='cw-DockPanel',d.f[ywc]=4,d.c=(bZb(),XYb),bXb(d,new lVb(lCc),(aXb(),ZWb)),bXb(d,new lVb(mCc),$Wb),bXb(d,new lVb(nCc),WWb),bXb(d,new lVb(oCc),_Wb),bXb(d,new lVb(pCc),ZWb),bXb(d,new lVb(qCc),$Wb),c=new lVb('\u8FD9\u4E2A\u793A\u4F8B\u4E2D\u5728<code>DockPanel<\/code> \u7684\u4E2D\u95F4\u4F4D\u7F6E\u6709\u4E00\u4E2A<code>ScrollPanel<\/code>\u3002\u5982\u679C\u5728\u4E2D\u95F4\u653E\u5165\u5F88\u591A\u5185\u5BB9\uFF0C\u5B83\u5C31\u4F1A\u53D8\u6210\u9875\u9762\u5185\u7684\u53EF\u6EDA\u52A8\u533A\u57DF\uFF0C\u65E0\u9700\u4F7F\u7528IFRAME\u3002<br><br>\u6B64\u5904\u4F7F\u7528\u4E86\u76F8\u5F53\u591A\u65E0\u610F\u4E49\u7684\u6587\u5B57\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u53EF\u4EE5\u6EDA\u52A8\u81F3\u53EF\u89C6\u533A\u57DF\u7684\u5E95\u90E8\u3002\u5426\u5219\uFF0C\u60A8\u6050\u6015\u4E0D\u5F97\u4E0D\u628A\u5B83\u7F29\u5230\u5F88\u5C0F\u624D\u80FD\u770B\u5230\u90A3\u5C0F\u5DE7\u7684\u6EDA\u52A8\u6761\u3002'),e=new J3b(c),e.N.style[Utc]=RAc,e.N.style[Vtc]='100px',bXb(d,e,VWb),cXb(d,'cwDockPanel'),d))}}
var rCc='runCallbacks28';_=B2.prototype=w2.prototype=new Z;_.gC=function C2(){return VI};_.Pd=function G2(){A2()};_.cM={};_=iXb.prototype=UWb.prototype=new $Rb;_.gC=function jXb(){return OR};_.ub=function kXb(b){cXb(this,b)};_.Kb=function lXb(b){var c;c=YQb(this,b);if(c){b==this.b&&(this.b=null);dXb(this)}return c};_.cM={13:1,14:1,15:1,16:1,69:1,71:1,131:1};_.b=null;var VWb,WWb,XWb,YWb,ZWb,$Wb,_Wb;_=nXb.prototype=mXb.prototype=new Z;_.gC=function oXb(){return LR};_.cM={};_=qXb.prototype=pXb.prototype=new Z;_.gC=function rXb(){return MR};_.cM={119:1};_.b=null;_.d=null;_=tXb.prototype=sXb.prototype=new Z;_.gC=function uXb(){return NR};_.cM={67:1};_.b=0;_.c=null;var VI=ygc(uxc,'AsyncLoader28'),OR=ygc(dxc,'DockPanel'),NR=ygc(dxc,'DockPanel$TmpRow'),WW=xgc(Nxc,'DockPanel$TmpRow;',NR),LR=ygc(dxc,'DockPanel$DockLayoutConstant'),MR=ygc(dxc,'DockPanel$LayoutData');wsc(D2)();