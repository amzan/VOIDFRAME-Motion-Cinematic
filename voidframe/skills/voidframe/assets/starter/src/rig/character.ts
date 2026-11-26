import {Node, Rect, Circle} from '@motion-canvas/2d';
import {neutral} from '../motion/pose.mjs';
export type Pose = typeof neutral;
// Technical cutout proxy. Replace primitives with original artwork before final production.
export function character() {
 const root=new Node({}); const torso=new Node({}); const head=new Node({y:-112});
 const scarf=new Node({x:-18,y:-81});
 function limb(x:number,y:number,a:number,b:number,width:number,color:string,endColor:string) {
  const upper=new Node({x,y}); const lower=new Node({y:a});
  upper.add(new Rect({y:a/2,width,height:a+width/2,radius:width/2,fill:color}));
  lower.add(new Rect({y:b/2,width:width-4,height:b+width/2,radius:(width-4)/2,fill:color}));
  lower.add(new Circle({y:b,size:width,fill:endColor})); upper.add(lower); return {upper,lower};
 }
 const l=limb(-17,0,48,46,21,'#273947','#20252d'); const r=limb(17,0,48,46,21,'#425460','#20252d');
 const al=limb(-25,-69,34,34,19,'#273947','#d3b3a2'); const ar=limb(25,-69,34,34,19,'#425460','#d3b3a2');
 root.add(l.upper);root.add(r.upper);root.add(torso);
 torso.add(al.upper);torso.add(new Rect({y:-42,width:68,height:87,radius:17,fill:'#394956'}));
 torso.add(new Rect({y:-79,width:52,height:14,radius:7,fill:'#a84f3d'}));
 scarf.add(new Rect({x:-27,width:57,height:12,radius:5,fill:'#a84f3d'}));torso.add(scarf);
 head.add(new Circle({size:[51,58],fill:'#d3b3a2'}));torso.add(head);torso.add(ar.upper);
 function apply(p:Pose) {torso.rotation(p.body);head.rotation(p.head);scarf.rotation(p.scarf);al.upper.rotation(p.armL);al.lower.rotation(p.elbowL);ar.upper.rotation(p.armR);ar.lower.rotation(p.elbowR);l.upper.rotation(p.legL);l.lower.rotation(p.kneeL);r.upper.rotation(p.legR);r.lower.rotation(p.kneeR);}
 apply(neutral);return {root,apply};
}
