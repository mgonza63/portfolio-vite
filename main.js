import './style.css'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.circleText', {rotation:360, duration: 45, repeat: -1})
