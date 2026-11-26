import unittest, json, subprocess, sys, tempfile, importlib.util
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; SKILL=ROOT/'skills/voidframe'
spec=importlib.util.spec_from_file_location('validate',SKILL/'scripts/validate_episode.py'); mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
class SkillTests(unittest.TestCase):
 def test_frontmatter(self):
  text=(SKILL/'SKILL.md').read_text();self.assertTrue(text.startswith('---\nname: voidframe\n'));self.assertIn('description:',text.split('---')[1]);self.assertIn('motion-canvas',text.lower())
 def test_episode(self):
  data=json.loads((SKILL/'assets/templates/episode.json').read_text());self.assertEqual(mod.validate(data),[]);data['shots'][1]['start_frame']+=1;self.assertTrue(mod.validate(data));data['shots'][1]['start_frame']-=1;data['shots'][0]['end_frame']=0;self.assertTrue(mod.validate(data))
 def test_install(self):
  with tempfile.TemporaryDirectory() as temp:
   cmd=[sys.executable,str(ROOT/'scripts/install.py'),'--agent','codex','--workspace',temp];subprocess.run(cmd,check=True,capture_output=True);self.assertTrue((Path(temp)/'.agents/skills/voidframe/assets/starter/src/project.ts').exists());self.assertNotEqual(subprocess.run(cmd,capture_output=True).returncode,0)
if __name__=='__main__': unittest.main()
