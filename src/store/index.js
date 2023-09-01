import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#fff',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './JavaScript-Emblem.png',
  fullDecal: './JavaScript-Emblem.png',
});

export default state;