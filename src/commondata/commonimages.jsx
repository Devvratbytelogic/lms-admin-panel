
import logo3 from '../assets/images/brand/logo-3.png';
import logo from '../assets/images/brand/logo.png';
import users8 from '../assets/images/users/8.jpg';
import users1 from '../assets/images/users/1.jpg';
import users2 from '../assets/images/users/2.jpg';
import users4 from '../assets/images/users/4.jpg';
import users5 from '../assets/images/users/5.jpg';
import users15 from '../assets/images/users/15.jpg';
import face6 from "../assets/images/faces/6.jpg";
import face9 from "../assets/images/faces/9.jpg";
import face11 from "../assets/images/faces/11.jpg";
import face10 from "../assets/images/faces/10.jpg";
import face12 from "../assets/images/faces/12.jpg";
import face4 from "../assets/images/faces/4.jpg";
import face7 from "../assets/images/faces/7.jpg";
import face2 from "../assets/images/faces/2.jpg";
import face13 from "../assets/images/faces/13.jpg";
import face14 from "../assets/images/faces/14.jpg";
import face15 from "../assets/images/faces/15.jpg";
import logo1 from '../assets/images/brand/logo-1.png';
import logo2 from '../assets/images/brand/logo-2.png';

export const Imagesdata = (data) => {

    const img = { logo3, logo, users8, users2,  users4, users5,  logo1, logo2, face10, face11, face12, face13, face14, face15, face2, face4, face7, face6,face9, users1, users15 }

    return img[data];
}