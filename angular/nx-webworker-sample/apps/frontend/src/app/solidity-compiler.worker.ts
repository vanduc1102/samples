/// <reference lib="webworker" />

importScripts('./assets/libs/worker.js');

import gamma from 'gamma';

addEventListener('message', ({ data }) => {
  console.log('Receiving: ', data);
  const startNum = Math.ceil(Math.random() * 10);
  const r = startNum / Math.random() - 1;
  self.postMessage([startNum, r, gamma(r)]);
});
