import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  name=""
  dob=""
  adrs=""
  cnt=""
  doa=""
  time=""
add=()=>{
  if(this.name=="" || this.dob=="" || this.adrs=="" || this.cnt=="" || this.doa=="" || this.time==""){
    alert("Empty fields")
  }
  else{

  
  let data:any={
    "name":this.name,
    "dob":this.dob,
    "adrs":this.adrs,
    "cnt":this.cnt,
    "doa":this.doa,
    "time":this.time
  }
  console.log(data)
  alert("Added Successfully")
  this.name=""
  this.dob=""
  this.adrs=""
  this.cnt=""
  this.doa=""
  this.time=""
}
}
}
