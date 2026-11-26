// Pure deterministic pose utilities. Angles are local degrees; +y is down.
export const neutral = Object.freeze({body:0,head:0,armL:8,elbowL:-12,armR:-8,elbowR:-12,legL:3,kneeL:2,legR:-3,kneeR:2,bob:0,scarf:0});
const pose = overrides => Object.freeze({...neutral,...overrides});
export const poses = Object.freeze({
 idle:neutral,
 stepA:pose({body:3,armL:22,armR:-32,elbowR:-20,legL:-24,kneeL:8,legR:21,kneeR:25,bob:-4,scarf:12}),
 passing:pose({body:2,legL:0,kneeL:5,legR:-9,kneeR:44,bob:3,scarf:4}),
 stepB:pose({body:3,armL:-32,armR:22,elbowL:-20,legL:21,kneeL:25,legR:-24,kneeR:8,bob:-4,scarf:-8}),
 hesitate:pose({body:-7,head:10,armR:-34,elbowR:-35,bob:4,scarf:5}),
 reach:pose({body:-10,head:-8,armR:-68,elbowR:-18,legR:-8,kneeR:5,bob:2,scarf:8}),
 resolve:pose({body:2,head:-8,armR:-20,elbowR:-10,bob:-2,scarf:-4}),
 grief:pose({body:-12,head:25,armL:12,armR:-12,bob:8}),
 recoil:pose({body:12,head:-14,armL:35,elbowL:-52,armR:-55,elbowR:-45,legR:-18,bob:6}),
});
export function blend(a,b,t) {
 const clamped=Math.min(1,Math.max(0,t)); const u=clamped*clamped*(3-2*clamped);
 return Object.fromEntries(Object.keys(neutral).map(k=>[k,a[k]+(b[k]-a[k])*u]));
}
export function sample(keys,t) {
 if (!keys.length) throw Error('Empty pose timeline');
 if (t<=keys[0][0]) return keys[0][1];
 for(let i=1;i<keys.length;i++) {const [end,b]=keys[i];const [start,a]=keys[i-1]; if(end<=start) throw Error('Non-increasing key times');if(t<=end)return blend(a,b,(t-start)/(end-start));}
 return keys.at(-1)[1];
}
// Two-link IK in local coordinates; caller must convert angle conventions for rig.
export function solveIK(x,y,a,b,bend=1) {
 if (!(a>0&&b>0)) throw Error('Lengths must be positive');
 const d=Math.min(a+b-1e-6,Math.max(Math.abs(a-b)+1e-6,Math.hypot(x,y)));
 const c=Math.max(-1,Math.min(1,(d*d-a*a-b*b)/(2*a*b)));
 const elbow=(bend<0?-1:1)*Math.acos(c);
 const shoulder=Math.atan2(y,x)-Math.atan2(b*Math.sin(elbow),a+b*Math.cos(elbow));
 return {shoulder:shoulder*180/Math.PI,elbow:elbow*180/Math.PI,clampedDistance:d};
}
