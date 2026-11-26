
import {defineConfig} from 'vite';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

const motionCanvasModule = require('@motion-canvas/vite-plugin');
const ffmpegModule = require('@motion-canvas/ffmpeg');

const motionCanvas = motionCanvasModule.default ?? motionCanvasModule;
const ffmpeg = ffmpegModule.default ?? ffmpegModule;

export default defineConfig({
  plugins: [
    motionCanvas({
      project: './src/project.ts',
    }),
    ffmpeg(),
  ],
});
