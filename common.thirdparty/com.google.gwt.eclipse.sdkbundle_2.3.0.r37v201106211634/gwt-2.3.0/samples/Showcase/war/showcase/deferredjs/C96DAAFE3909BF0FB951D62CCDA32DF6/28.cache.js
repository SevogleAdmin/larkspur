function T6(){}
function O6(){}
function l_b(){}
function G_b(){}
function F_b(){}
function I_b(){}
function M_b(){}
function L_b(){}
function z_b(b){if(b==p_b){return true}Sw();return b==n_b}
function A_b(b){if(b==o_b){return true}Sw();return b==s_b}
function J_b(b){this.c=(u1b(),p1b).b;this.e=(D1b(),C1b).b;this.b=b}
function B_b(){t_b();uWb.call(this);this.c=(u1b(),p1b);this.d=(D1b(),C1b);this.f[UAc]=0;this.f[VAc]=0}
function x_b(b,c){var d;d=cI(b.L,119);d.c=c.b;!!d.d&&(d.d[kzc]=c.b,undefined)}
function y_b(b,c){var d;d=cI(b.L,119);d.e=c.b;!!d.d&&(d.d.style[TAc]=c.b,undefined)}
function t_b(){t_b=wwc;m_b=new G_b;p_b=new G_b;o_b=new G_b;n_b=new G_b;q_b=new G_b;r_b=new G_b;s_b=new G_b}
function V6(){R6=new T6;ci((ai(),_h),28);!!$stats&&$stats(Ji(VGc,$wc,-1,-1));R6.Dd();!!$stats&&$stats(Ji(VGc,nCc,-1,-1))}
function u_b(b,c,d){var e;if(d==m_b){if(c==b.b){return}else if(b.b){throw new glc('Only one CENTER widget may be added')}}fe(c);Hdc(b.k,c);d==m_b&&(b.b=c);e=new J_b(d);c.L=e;x_b(c,b.c);y_b(c,b.d);w_b(b);he(c,b)}
function v_b(b,c){var d,e,f,g,i,j,k,n;_cc(b.N,Wwc,c);j=new Etc;k=new Sdc(b.k);while(k.b<k.c.d-1){d=Rdc(k);i=cI(d.L,119).b;f=cI(j.$c(i),10);e=!f?1:f.b;g=i==q_b?'north'+e:i==r_b?'south'+e:i==s_b?'west'+e:i==n_b?'east'+e:i==p_b?'linestart'+e:i==o_b?'lineend'+e:BAc;_cc((n=d.N.parentNode,(!n||n.nodeType!=1)&&(n=null),n),c,g);j.ad(i,Clc(e+1))}}
function w_b(b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;c=b.e;while(FUb(c)>0){c.removeChild(EUb(c,0))}r=1;f=1;for(j=new Sdc(b.k);j.b<j.c.d-1;){e=Rdc(j);g=cI(e.L,119).b;g==q_b||g==r_b?++r:(g==n_b||g==s_b||g==p_b||g==o_b)&&++f}s=VH(m_,{17:1},67,r,0);for(i=0;i<r;++i){s[i]=new M_b;s[i].c=$doc.createElement(RAc);c.appendChild(s[i].c)}n=0;o=f-1;p=0;t=r-1;d=null;for(j=new Sdc(b.k);j.b<j.c.d-1;){e=Rdc(j);k=cI(e.L,119);u=$doc.createElement(SAc);k.d=u;k.d[kzc]=k.c;k.d.style[TAc]=k.e;k.d[lyc]=Wwc;k.d[myc]=Wwc;if(k.b==q_b){IUb(s[p].c,u,s[p].b);u.appendChild(e.N);u[tDc]=o-n+1;++p}else if(k.b==r_b){IUb(s[t].c,u,s[t].b);u.appendChild(e.N);u[tDc]=o-n+1;--t}else if(k.b==m_b){d=u}else if(z_b(k.b)){q=s[p];IUb(q.c,u,q.b++);u.appendChild(e.N);u[WGc]=t-p+1;++n}else if(A_b(k.b)){q=s[p];IUb(q.c,u,q.b);u.appendChild(e.N);u[WGc]=t-p+1;--o}}if(b.b){q=s[p];IUb(q.c,d,q.b);d.appendChild(b.b.N)}}
function S6(){var b,c,d,e;while(P6){b=P6;P6=P6.c;!P6&&(Q6=null);Ehb(b.b.b,(d=new B_b,d.N[Rwc]='cw-DockPanel',d.f[UAc]=4,d.c=(u1b(),o1b),u_b(d,new EZb(PGc),(t_b(),q_b)),u_b(d,new EZb(QGc),r_b),u_b(d,new EZb(RGc),n_b),u_b(d,new EZb(SGc),s_b),u_b(d,new EZb(TGc),q_b),u_b(d,new EZb(UGc),r_b),c=new EZb('\u0647\u0630\u0627 \u0647\u0648 <code>scrollpanel<\/code> \u0627\u0644\u0645\u062F\u0648\u0646\u0647 \u0627\u0644\u0648\u0627\u0631\u062F\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0643\u0632 \u0645\u0646 <code>dockpanel<\/code> \u0627\u0644\u0645\u062F\u0648\u0646\u0647>. \u0645\u0646 \u062E\u0644\u0627\u0644 \u0648\u0636\u0639 \u0628\u0639\u0636 \u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A \u0627\u0644\u0649 \u062D\u062F \u0643\u0628\u064A\u0631 \u0641\u064A \u062E\u0637 \u0627\u0644\u0648\u0633\u0637 \u0648\u062A\u062D\u062F\u064A\u062F \u062D\u062C\u0645\u0647 \u0635\u0631\u0627\u062D\u0629 , \u0641\u0627\u0646\u0647 \u064A\u0635\u0628\u062D \u0627\u0644\u0645\u062C\u0627\u0644 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062F\u0631\u062C \u0636\u0645\u0646 \u0635\u0641\u062D\u0629 , \u0648\u0644\u0643\u0646 \u062F\u0648\u0646 \u0627\u0646 \u064A\u062A\u0637\u0644\u0628 \u0630\u0644\u0643 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0633\u064A\u0644\u0629 iframe. <br><br>\u0627\u0644\u064A\u0643 \u0644\u0627 \u0628\u0623\u0633 \u0628\u0647 \u0627\u0643\u062B\u0631 \u0645\u0639\u0646\u0649 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0634\u0623\u0646\u0647 \u0627\u0646 \u064A\u062E\u062F\u0645 \u0641\u064A \u0627\u0644\u0645\u0642\u0627\u0645 \u0627\u0644\u0627\u0648\u0644 \u0644\u062C\u0639\u0644 \u0647\u0630\u0627 \u0627\u0644\u0634\u064A\u0621 \u0644\u0641\u064A\u0641\u0647 \u0645\u0646 \u0627\u0633\u0641\u0644 \u0645\u0646\u0637\u0642\u0629 \u0627\u0639\u0645\u0627\u0644\u0647\u0627 \u0644\u0644\u0639\u064A\u0627\u0646. \u062E\u0644\u0627\u0641 \u0630\u0644\u0643 , \u0627\u0646\u0643 \u0642\u062F \u062A\u0636\u0637\u0631 \u0627\u0644\u0649 \u062C\u0639\u0644\u0647\u0627 \u062D\u0642\u0627 , \u062D\u0642\u0627 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0643\u064A \u0646\u0631\u0649 nifty \u0641\u064A\u0641\u0647 \u0627\u0644\u0642\u0636\u0628\u0627\u0646!'),e=new a8b(c),e.N.style[lyc]=rFc,e.N.style[myc]='100px',u_b(d,e,m_b),v_b(d,'cwDockPanel'),d))}}
var VGc='runCallbacks28';_=T6.prototype=O6.prototype=new Z;_.gC=function U6(){return lN};_.Dd=function Y6(){S6()};_.cM={};_=B_b.prototype=l_b.prototype=new rWb;_.gC=function C_b(){return eW};_.ub=function D_b(b){v_b(this,b)};_.Kb=function E_b(b){var c;c=pVb(this,b);if(c){b==this.b&&(this.b=null);w_b(this)}return c};_.cM={13:1,14:1,15:1,16:1,69:1,71:1,131:1};_.b=null;var m_b,n_b,o_b,p_b,q_b,r_b,s_b;_=G_b.prototype=F_b.prototype=new Z;_.gC=function H_b(){return bW};_.cM={};_=J_b.prototype=I_b.prototype=new Z;_.gC=function K_b(){return cW};_.cM={119:1};_.b=null;_.d=null;_=M_b.prototype=L_b.prototype=new Z;_.gC=function N_b(){return dW};_.cM={67:1};_.b=0;_.c=null;var lN=Rkc(QBc,'AsyncLoader28'),eW=Rkc(zBc,'DockPanel'),dW=Rkc(zBc,'DockPanel$TmpRow'),m_=Qkc(hCc,'DockPanel$TmpRow;',dW),bW=Rkc(zBc,'DockPanel$DockLayoutConstant'),cW=Rkc(zBc,'DockPanel$LayoutData');Pwc(V6)();