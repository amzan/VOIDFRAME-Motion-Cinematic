import test from 'node:test'; import assert from 'node:assert/strict';
import {neutral,poses,blend,sample,solveIK} from '../src/motion/pose.mjs';
test('pose shape and interpolation endpoints',()=>{for(const p of Object.values(poses))assert.deepEqual(Object.keys(p),Object.keys(neutral));assert.deepEqual(blend(neutral,poses.reach,0),neutral);assert.deepEqual(blend(neutral,poses.reach,1),poses.reach);});
test('timeline sampling deterministic',()=>{const k=[[0,neutral],[2,poses.reach]];assert.deepEqual(sample(k,1),sample(k,1));assert.deepEqual(sample(k,3),poses.reach);assert.throws(()=>sample([],1));});
test('IK finite and endpoint matches target',()=>{const q=solveIK(3,4,4,4);const a=q.shoulder*Math.PI/180,b=q.elbow*Math.PI/180;assert.ok(Math.abs(4*Math.cos(a)+4*Math.cos(a+b)-3)<1e-6);assert.ok(Math.abs(4*Math.sin(a)+4*Math.sin(a+b)-4)<1e-6);assert.ok(Number.isFinite(solveIK(100,0,4,4).elbow));});
