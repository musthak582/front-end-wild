import { 
    FaHtml5,
    FaCss3Alt,
    FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript} from "react-icons/si";
import { RiTailwindCssFill} from "react-icons/ri";

export const sheetItems = [
    {
        part: 'Frontend Technologies',
        programmingLanguages: [
            {
                label: 'HTML',
                icon: <FaHtml5 />,
                path: '/cheatsheets/html',
                description: 'Standard markup language for creating web pages.'
            },
            {
                label: 'CSS',
                icon: <FaCss3Alt />,
                path: '/cheatsheets/css',
                description: 'Stylesheet language used for describing the presentation of a document.'
            },
            {
                label: 'JavaScript',
                icon: <IoLogoJavascript />,
                path: '/cheatsheets/javascript',
                description: 'Programming language that enables interactive web pages.'
            },
            {
                label: 'React',
                icon: <FaReact />,
                path: '/cheatsheets/react',
                description: 'JavaScript library for building user interfaces.'
            },
            {
                label: 'TypeScript',
                icon: <SiTypescript />,
                path: '/cheatsheets/typescript',
                description: 'A typed superset of JavaScript that compiles to plain JavaScript.'
            },
            {
                label: 'TailwindCss',
                icon: <RiTailwindCssFill />,
                path: '#',
                description: 'A utility-first CSS framework for rapid UI development.'
            },
        ]
    },

];
