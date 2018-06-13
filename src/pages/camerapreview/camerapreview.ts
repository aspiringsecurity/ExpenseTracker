import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{CameraviewPage}from '../../pages/cameraview/cameraview';
import {onvif} from 'onvif';
import{Validators,FormBuilder,FormGroup}from'@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CamerapreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camerapreview',
  templateUrl: 'camerapreview.html',
})
export class CamerapreviewPage {

  
currentDevice:any;
  ipadress;
  login;
    onvif:any;
account:FormGroup;
detailsList;
public dataToStore;
  constructor(public navCtrl: NavController,
  public storage:Storage,
  private formBuilder:FormBuilder) {

    this.account = this.formBuilder.group({
		  ipadress: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	login: [''],
		  pwd: ['', Validators.required],
		});

 
    this.detailsList=
this.dataToStore={
      ipadress:this.account.value.ipadress,
      login:this.account.value.login,
      Password:this.account.value.pwd
    }
     // this.storage.get("Logins").then((data)=>{
      //console.log(data);
       //this.detailsList=data;
       //console.log(this.detailsList);
//console.log(this.dataToStore.ipadress);

 // })

  }

connecttocamera()
{

// Create an OnvifDevice object



 if(this.account.value.ipadress=='')
	 {
		 alert("Please enter ipadress");
		 return;
	 }

  else if(this.account.value.login=='')
   {
     alert("Enter the username");
     return;
   }
else	if(this.account.value.pwd=='')
  {
    alert("Enter the password");
  
  }

  else
  {

    onvif.Discovery.probe(function(err, cams) {
// function will be called only after timeout (5 sec by default)
    if (err) { throw err; }
    cams.forEach(function(cam) {
      cam.hostname=this.account.value.ipadress,
        cam.username = this.account.value.username,
        cam.password = this.account.value.password;
        cam.connect(console.log);
         this.absoluteMove({x: 1, y: 1, zoom: 1});
  this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
    this.http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<html><body>' +
        '<embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
        '</body></html>');
    }).listen(8001);
         this.navCtrl.push(CamerapreviewPage);
    });
});
});
  
    /*console.log("Device="+this.currentDevice);
this.currentDevice = OnvifDevice(this.account.value.ipadress, this.account.value.login, this.account.value.password);
                this.currentDevice.listener = this;
                this.currentDevice.getServices();
   console.log(this.currentDevice);
// Initialize the OnvifDevice object
 if (this.currentDevice.isConnected) {*/
           // this.navCtrl.push(CameraviewPage);
            
            
            
            }



  }
/*  savedetails()
{
  //let checkbook = new Checkbook(this.account.value.balance, this.account.value.budget, entries);
  this.dataToStore={
      ipadress:this.account.value.ipadress,
      login:this.account.value.login,
      Password:this.account.value.pwd
    }
   this.storage.set("Logins",this.dataToStore).then((successData)=>{
      console.log("Data Stored");
      console.log(successData);
        alert("Details saved successfully");
    })
     //this.viewdetails();
}
*/
  /* update()
  {
    //this.ipadress.setText(this.detailsList.ipadress);
//this.account.value.ipadress.setText(this.detailsList.ipadress);
this.account = this.formBuilder.group({
		  ipadress:this.detailsList.ipadress,
	login: this.detailsList.login,
		  pwd: this.detailsList.Password,
		});

  }*/
  


  





}
