import {makeScene2D, Node, Rect, Circle, Line} from '@motion-canvas/2d';
import {tween} from '@motion-canvas/core';
import {character} from '../rig/character';
import {poses,sample} from '../motion/pose.mjs';
// Eight-second ORIGINAL technical proof, not a polished film. Recompose for vertical.
export default makeScene2D(function* (view) {
 view.fill('#101827');
 const world=new Node({});view.add(world);
 const far=new Node({});world.add(far);
 for(let i=0;i<9;i++)far.add(new Rect({x:-950+i*240,y:-130-(i%3)*60,width:180,height:720,fill:i%2?'#263747':'#1e2c3b'}));
 const mid=new Node({});world.add(mid);
 mid.add(new Rect({x:440,y:-40,width:410,height:730,fill:'#354653'}));
 mid.add(new Rect({x:280,y:-30,width:245,height:430,fill:'#161d26'}));
 const glow=new Rect({x:280,y:-30,width:230,height:410,fill:'#f2ae63',opacity:0});mid.add(glow);
 const door=new Rect({x:280,y:-30,width:228,height:410,fill:'#655047'});mid.add(door);
 const lamp=new Circle({x:120,y:-220,size:35,fill:'#efb675'});mid.add(lamp);
 world.add(new Rect({y:380,width:2500,height:380,fill:'#25333f'}));
 const actor=character();world.add(actor.root);actor.root.scale(2.1);
 const rain=new Node({});world.add(rain);
 for(let i=0;i<45;i++)rain.add(new Line({points:[[0,0],[-12,48]],x:((i*163)%2000)-1000,y:((i*97)%1100)-550,stroke:'#9db2c1',lineWidth:2,opacity:0.28}));
 const keys=[[0,poses.stepA],[0.5,poses.passing],[1,poses.stepB],[1.5,poses.passing],[2,poses.idle],[3.1,poses.hesitate],[4.5,poses.reach],[5.6,poses.reach],[7,poses.resolve],[8,poses.idle]] as const;
 // Sample in seconds from a deterministic tween; no wall clock or random motion.
 yield* tween(8, value=>{
  const t=value*8;const p=sample(keys,t);actor.apply(p);actor.root.position([-380+Math.min(t/2,1)*420,145+p.bob]);
  far.x(-Math.min(t/2,1)*28);world.scale(1+Math.max(0,Math.min((t-2)/2.5,1))*0.07);
  const open=Math.max(0,Math.min((t-4.5)/1.2,1));door.scale.x(1-open*0.94);door.x(280-open*100);glow.opacity(open*0.92);
  rain.y((t*95)%110-55);lamp.opacity(0.9+Math.sin(t*5)*0.08);
 });
});
