import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Work } from './work/work';
import { Dashboard } from './dashboard/dashboard';
import { Addabout } from './dashboard/AboutControl/addabout/addabout';
import { ManageAbout } from './dashboard/AboutControl/manage-about/manage-about';
import { UpdateAbout } from './dashboard/AboutControl/update-about/update-about';
import { AddProject } from './dashboard/ProjectsControl/add-project/add-project';
import { GetProjects } from './dashboard/ProjectsControl/getprojects/getprojects';
import { UpdateProject } from './dashboard/ProjectsControl/updateprojects/updateprojects';
import { Home } from './home/home';
import { Getservices } from './dashboard/ServicesControl/getservices/getservices';
import { Postservices } from './dashboard/ServicesControl/postservices/postservices';
import { Updateservices } from './dashboard/ServicesControl/updateservices/updateservices';
import { AddHome } from './dashboard/HomeControl/add-home/add-home';
import { GetHome } from './dashboard/HomeControl/get-home/get-home';
import { Updatehome } from './dashboard/HomeControl/updatehome/updatehome';
import { Postcontactme } from './dashboard/ContactControl/postcontactme/postcontactme';
import { GetContactus } from './dashboard/ContactControl/get-contactus/get-contactus';


export const routes: Routes = [
    {path:'dashboard',component:Dashboard,children:[
        {path:'about',component:Addabout},
        {path:'manageabout',component:ManageAbout},
        {path:'updateabout/:id',component:UpdateAbout},
        {path:'addproject',component:AddProject},
        {path:'getprojects',component:GetProjects},
        {path:'updateproject/:id',component:UpdateProject},
        {path:'getservices',component:Getservices},
        {path:'postservices',component:Postservices},
        {path:'updateservices/:id',component:Updateservices},
        {path:'addhome',component:AddHome},
        {path:'gethome',component:GetHome},
        {path:'updatehome/:id',component:Updatehome},
        {path:'postcontactme',component:Postcontactme},
        {path:'getcontactus',component:GetContactus}
    ]},

    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'projects',component:Projects},
    {path:'services',component:Work},
    { path: '', redirectTo: 'about', pathMatch: 'full' }


];
