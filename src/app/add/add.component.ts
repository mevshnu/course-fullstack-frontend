import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  courseTitle=""
  courseDescription=""
  courseVenue=""
  courseDuration=""
  courseDate=""
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseVenue":this.courseVenue,
      "courseDuration":this.courseDuration,
      "courseDate":this.courseDate}
      console.log(data)
      this.api.addCourse(data).subscribe(
        (response)=>
        {
          console.log(response)
        }
      )

    }
  }

