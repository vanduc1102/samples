import { Component } from '@angular/core';

@Component({
  selector: 'nx-webworker-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  private worker: Worker;
  constructor() {
    this.worker = new Worker(
      new URL('./solidity-compiler.worker', import.meta.url),
      {
        type: 'module',
      }
    );
    this.worker.onmessage = ({ data }) => {
      console.log(`Page got message: ${data}`);
    };
  }

  handleWebWorkerButton() {
    const message = 'Clicked at: ' + Date.now();
    console.log(message);
    this.worker.postMessage(message);
  }
}
