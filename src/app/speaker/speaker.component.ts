import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/_models/Speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css'],
})
export class SpeakerComponent implements OnInit {
  speakers: Speaker[] = [
    new Speaker(
      1,
      'hola',
      '../../assets/image1.jpeg',
      'egypt',
      new Date(1990, 1, 6),
      5,
      false,
      'alex'
    ),
    new Speaker(
      2,
      'hola2',
      '../../assets/image2.jpeg',
      'egypt',
      new Date(1990, 2, 6),
      5,
      false,
      'smart'
    ),
    new Speaker(
      3,
      'hola3',
      '../../assets/image3.jpeg',
      'egypt',
      new Date(1990, 3, 6),
      5,
      false,
      'mansoura'
    ),
  ];
  show: boolean = true;
  fileToUpload: File | null = null;
  speaker = { ...this.speakers[0] };
  speakerUpdate = { ...this.speakers[0] };
  // speakerDetails:Speaker;
  showDetails(id: number) {
    for (let index = 0; index < this.speakers.length; index++) {
      if (this.speakers[index]._id == id) {
        this.speaker._id = this.speakers[index]._id;
        this.speaker.name = this.speakers[index].name;
        this.speaker.birthdate = this.speakers[index].birthdate;
        this.speaker.hourRate = this.speakers[index].hourRate;
        this.speaker.address = this.speakers[index].address;
        this.speaker.image = this.speakers[index].image;
        this.speaker.isMarried = this.speakers[index].isMarried;
        this.speaker.government = this.speakers[index].government;
      }
    }
  }
  update(id: number) {
    for (let item of this.speakers) {
      if (item._id == id) {
        this.speakerUpdate._id = item._id;
        this.speakerUpdate.name = item.name;
        this.speakerUpdate.birthdate = item.birthdate;
        this.speakerUpdate.hourRate = item.hourRate;
        this.speakerUpdate.address = item.address;
        this.speakerUpdate.image = item.image;
        this.speakerUpdate.isMarried = item.isMarried;
        this.speakerUpdate.government = item.government;
        console.log(item.birthdate);
      }
    }
  }
  delete(n: number) {
    if (confirm('are you sure')) {
      for (let index = 0; index < this.speakers.length; index++) {
        if (this.speakers[index]._id == n) {
          this.speakers.splice(index, 1);
          return;
        }
      }
    }
  }
  addSpeaker() {
    let find = false;

    for (let item of this.speakers) {
      if (item._id == this.speakerUpdate._id) {
        item.name = this.speakerUpdate.name;
        item.birthdate = this.speakerUpdate.birthdate;
        item.hourRate = this.speakerUpdate.hourRate;
        item.address = this.speakerUpdate.address;
        item.image = this.speakerUpdate.image;
        item.isMarried = this.speakerUpdate.isMarried;
        item.government = this.speakerUpdate.government;
        find = true;
      }
    }
    if (!find) {
      console.log(this.speakerUpdate.birthdate);
      this.speakers.push({ ...this.speakerUpdate });
    }
  }
  showImages() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
