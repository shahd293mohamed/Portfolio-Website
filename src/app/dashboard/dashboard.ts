import { Component } from '@angular/core';
import { Addabout } from './AboutControl/addabout/addabout';
import { RouterOutlet } from '@angular/router';
import { ManageAbout } from './AboutControl/manage-about/manage-about';
import { UpdateAbout } from './AboutControl/update-about/update-about';
import { AddProject } from './ProjectsControl/add-project/add-project';
import { GetProjects } from './ProjectsControl/getprojects/getprojects';
import { UpdateProject } from './ProjectsControl/updateprojects/updateprojects';
import { Getservices } from './ServicesControl/getservices/getservices';
import { Postservices } from './ServicesControl/postservices/postservices';
import { Updateservices } from './ServicesControl/updateservices/updateservices';
import { AddHome } from './HomeControl/add-home/add-home';
import { GetHome } from './HomeControl/get-home/get-home';
import { Updatehome } from './HomeControl/updatehome/updatehome';
import { Postcontactme } from './ContactControl/postcontactme/postcontactme';
import { GetContactus } from './ContactControl/get-contactus/get-contactus';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Addabout, ManageAbout, UpdateAbout,AddProject,GetProjects,UpdateProject,Getservices,
    Postservices,Updateservices,AddHome,GetHome,Updatehome,Postcontactme,GetContactus
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
