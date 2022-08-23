import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-webrtc-head',
  templateUrl: './webrtc-head.component.html',
  styleUrls: ['./webrtc-head.component.css']
})
export class WebrtcHeadComponent implements OnInit {

  constructor() {}
  @ViewChild('videoElement') video: ElementRef | undefined;

  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(stream => {
        this.video!.nativeElement.srcObject = stream;

      }).catch(err => {
      console.log(err);
    });
  }

}
