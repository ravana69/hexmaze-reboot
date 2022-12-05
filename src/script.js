c=document.querySelector('#c')
x=c.getContext('2d')
S=Math.sin
C=Math.cos
resize=()=>{
  c.width=c.clientWidth
  c.height=c.clientHeight
}
resize()
window.onresize=resize()
t=0
  
Draw=()=>{
   x.fillStyle='#0008',x.fillRect(0,0,w=c.width,w),h=800
  R=(Rl,Pt,Yw)=>{X=S(p=(A=(M=Math).atan2)(X,Y)+Rl)*(d=(H=M.hypot)(X,Y)),Y=C(p)*d,Y=S(p=A(Y,Z)+Pt)*(d=H(Y,Z)),Z=C(p)*d,X=S(p=A(X,Z)+Yw)*(d=H(X,Z)),Z=C(p)*d,X+=oX,Y+=oY,Z+=oZ}
  Q=q=>[c.width/2+X/Z*h,c.height/2+Y/Z*h]
  Rn=Math.random

  oX=0,oY=0,oZ=12+S(t*1.5)*4
  Rl=t/2,Pt=S(t)/2.5,Yw=S(t)/2
  cellSize=.25
  iCs=1,iMv=.5,sql=.2,MR=6

  RQa=(tx,ty,m)=>{
    a=[]
    for(let i=6;i--;){
      a=[...a,[tx+S(p=Math.PI*2/6*i+Math.PI/6)*cellSize*iCs,ty+C(p)*cellSize*iCs,0]]
    }
    b=[...b,[a,[1,1,1,1,1,1],[tx,ty,0],1,[],0,[],0]]
    a=[]
    for(let j=6;j--;){
      a=[]
      X=tx+S(p=Math.PI*2/6*j)*d
      Y=ty+C(p)*d
      for(i=6;i--;){
        a=[...a,[X+S(p=Math.PI*2/6*i+Math.PI/6)*cellSize*iCs,Y+C(p)*cellSize*iCs,0]]
      }
      b=[...b,[a,[1,1,1,1,1,1],[X,Y,0],1,[],0,[],0]]
    }
    if(m){
      for(let j=6;j--;){
        a=[]
        X=tx+S(p=Math.PI/3*j+Math.PI/6)*.75
        Y=ty+C(p)*.75
        for(i=6;i--;){
          a=[...a,[X+S(p=Math.PI*2/6*i+Math.PI/6)*cellSize*iCs,Y+C(p)*cellSize*iCs,0]]
        }
        b=[...b,[a,[1,1,1,1,1,1],[X,Y,0],1,[],0,[],0]]
      }
    }
  }
  RQb=(tx1,ty1)=>{
    RQa(tx1,ty1,0)
    for(j=6;j--;){
      RQa(tx1+S(p=l*j)*d*3,ty1+C(p)*d*3,1)
      RQa(tx1+S(p=l*j+Math.PI/6)*d*6*d*2,ty1+C(p)*d*6*d*2,0)
      RQa(tx1+S(p=l*j)*d*6,ty1+C(p)*d*6,1)
    }
  }

  RQc=(tx2,ty2)=>{
   RQb(tx2,ty2)
   for(let j=6;j--;){
      d1=5.25
      RQb(tx2+S(p=Math.PI*2/6*j+Math.PI/6)*d1,ty2+C(p)*d1)
    }
  }

  genPath=start=>{
    P=[]
    recurse=q=>{
      B[q][5]=1
      tc=0
      while(tc<20&&B[tq=B[q][4][B[q][4].length*Rn()|0]][5])tc++;
      n=5
      if(!B[tq][5]){
        p=(Math.atan2(B[tq][2][0]-B[q][2][0]+.00001,B[q][2][1]-B[tq][2][1])+Math.PI)/(Math.PI*2+.001)*6|0
        switch(p){
          case 0:
            B[q][1][0]=0
            B[tq][1][3]=0
            break
          case 1:
            B[q][1][1]=0
            B[tq][1][4]=0
            break
          case 2:
            B[q][1][2]=0
            B[tq][1][5]=0
            break
          case 3:
            B[q][1][3]=0
            B[tq][1][0]=0
            break
          case 4:
            B[q][1][4]=0
            B[tq][1][1]=0
            break
          case 5:
            B[q][1][5]=0
            B[tq][1][2]=0
            break;
        }
        P.push([q,tq])
        B[q][6].push(tq)
        B[tq][6].push(q)
        recurse(tq)
      }else{
        if(B.filter(v=>!v[5]).length)recurse(P[P.length*Rn()|0][0])
      }
    }
    recurse(start)
  }

  if(!t){x
    l=Math.PI*2/6    
    x.lineJoin=x.lineCap='round'
    genMaze=()=>{
      o=d=0.8660254037844386*cellSize*2
      b=[],a=[]
      for(i=6;i--;)a=[...a,[S(p=l*i+Math.PI/6)*cellSize*iCs,C(p)*cellSize*iCs,0]]
      b=[...b,[a,[1,1,1,1,1,1],[0,0,0],1,[],0,[],0]]
      RQc(0,0)
      for(let j=6;j--;){
        d1=10.5
        RQc(S(p=Math.PI*2/6*j+Math.PI/6)*d1,C(p)*d1)
      }
      M1=[0,0,0,S(p=Math.PI*2*Rn())*iMv,C(p)*iMv,0]
      M2=[0,0,0,S(p=Math.PI*2*Rn())*iMv,C(p)*iMv,0]
      b=b.filter(v=>Math.hypot(...v[2])<=MR)
      
      for(let i=0;i<b.length;++i){
        for(let j=i+1;j<b.length;++j){
          if(b[j][3]&&((d=Math.hypot(b[i][2][0]-b[j][2][0],b[i][2][1]-b[j][2][1]))<.01))b[j][3]=0
        }
      }
      b = b.filter(v=>v[3])
      for(let i=0;i<b.length;++i){
        for(let j=0;j<b.length;++j){
          if(i!=j && (d=Math.hypot(b[i][2][0]-b[j][2][0],b[i][2][1]-b[j][2][1]))-o<.1){
            b[i][4].push(j)
          }
        }
      }
      B = b
      genPath(0)
    }
    genMaze()
  }
  
  //if(!((t*60|0)%6)) genMaze()

  solve=(a,b)=>{
    if(found||memo[b])return
    if(a==b) return true
    memo[b]=1
    let test=0
    B[b][6].map(v=>{if(solve(a,v))found=1,sP.push(v),test=1})
    if(test) return true
  }

  M1[3]+=(Rn()-.5)*sql
  M1[4]+=(Rn()-.5)*sql
  d=(H=Math.hypot)(M1[3],M1[4])
  M1[3]-=(M1[3]-M1[3]/d*iMv)/5
  M1[4]-=(M1[4]-M1[4]/d*iMv)/5
  X=M1[0]+=M1[3]
  Y=M1[1]+=M1[4]
  Z=M1[2]+=M1[5]
  if(H(...M1)>MR)M1[3]-=S(p=A(M1[0],M1[1]))/4,M1[4]-=C(p)/4
  R(Rl,Pt,Yw)
  x.beginPath()
  x.arc(...Q(),1999/Z/Z,0,7)
  x.fillStyle='#6af9'
  x.fill()
  M2[3]+=(Rn()-.5)*sql
  M2[4]+=(Rn()-.5)*sql
  d=H(M2[3],M2[4])
  M2[3]-=(M2[3]-M2[3]/d*iMv)/5
  M2[4]-=(M2[4]-M2[4]/d*iMv)/5
  X=M2[0]+=M2[3]
  Y=M2[1]+=M2[4]
  Z=M2[2]+=M2[5]
  if(H(...M2)>MR)M2[3]-=S(p=A(M2[0],M2[1]))/4,M2[4]-=C(p)/4
  R(Rl,Pt,Yw)
  x.beginPath()
  x.arc(...Q(),1999/Z/Z,0,7)
  x.fillStyle='#6af9'
  x.fill()


  sP=[],found=0,memo=Array(5e5).fill(0)

  mindA=mindB=6e6
  B.map((v,i)=>{
    v[7]=0
    if((d1=H(v[2][0]-M1[0],v[2][1]-M1[1]))<mindA)ptA=i,mindA=d1
    if((d2=H(v[2][0]-M2[0],v[2][1]-M2[1]))<mindB)ptB=i,mindB=d2
  })
  B[ptA][7]=B[ptB][7]=1

  solve(ptA,ptB)
  sP.push(ptB)

  sP.map((v,j)=>{
    if(j<sP.length-1){
    x.beginPath()
      X=B[v][2][0]
      Y=B[v][2][1]
      Z=B[v][2][2]
      R(Rl,Pt,Yw)
      x.lineTo(...Q())
      X=B[sP[j+1]][2][0]
      Y=B[sP[j+1]][2][1]
      Z=B[sP[j+1]][2][2]
      R(Rl,Pt,Yw)
      x.lineTo(...Q())          
      x.strokeStyle='#3f66'
      x.lineWidth=1+Math.min(15,1500/Z/Z)
      x.stroke()
    }
  })

  P.map((v,j)=>{
    X=B[v[0]][2][0]
    Y=B[v[0]][2][1]
    Z=B[v[0]][2][2]
    R(Rl,Pt,Yw)
    tq=Q()
    for(let i=1;i<v.length;++i){
      x.beginPath()
      x.lineTo(...tq)
      X=B[v[1]][2][0]
      Y=B[v[1]][2][1]
      Z=B[v[1]][2][2]
      R(Rl,Pt,Yw)
      x.lineTo(...Q())
    }
    x.strokeStyle=`hsla(${t*400},99%,60%,.3`
    x.lineWidth=1+Math.min(15,600/Z/Z)
    x.stroke()
  })

  B.map((v,j)=>{
    if(v[7]){
      v[0].map((q,i)=>{
        X=q[0]
        Y=q[1]
        Z=q[2]
        R(Rl,Pt,Yw)
        if(!i)x.beginPath()
        x.lineTo(...Q())
        if(i==v[0].length-1){
          x.closePath()
          x.fillStyle='#f084'
          x.closePath()
          x.fill()
        }
      })
    }
    v[0].map((q,i)=>{
      if(v[1][i]){
        X=q[0]
        Y=q[1]
        Z=q[2]
        R(Rl,Pt,Yw)
        x.beginPath()
        x.lineTo(...Q())
        if(i<5){
          X=v[0][i+1][0]
          Y=v[0][i+1][1]
          Z=v[0][i+1][2]
        }else{
          X=v[0][0][0]
          Y=v[0][0][1]
          Z=v[0][0][2]
        }
        R(Rl,Pt,Yw)
        x.lineTo(...Q())
        x.strokeStyle='#62cc'
        x.lineWidth=1+Math.min(15,200/Z/Z)
        x.stroke()
      }
    })
  })

  t+=1/60
  requestAnimationFrame(Draw)
}

Draw()