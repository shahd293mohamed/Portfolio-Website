export interface Iabout {
  _id: string;
  name: string;
  title: string; 
  bio: string;
  profileImage: string;
  resumelink?: string;
  collage: string;
  major: string;
  startYear: string;
  endYear:string;
}

export interface Iprojects{
    _id: String,
    title: String,
    description: String,
    image: String,
    catagory: String,
    technologies: [String], 
    demoLink: { type: String },       
    githubLink: { type: String },
}
export interface Ihome{
  _id: string;
  name: string;
  bio: string;
  image: string;
}

export interface Iservices{
  _id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Icontact{
  _id: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Icontactus{
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
