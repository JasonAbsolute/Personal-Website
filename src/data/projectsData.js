import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import ProjectShineLogo from '../assets/png/LogoProjectShine.png'
import Ziggy from '../assets/png/Ziggys_Labyrinth.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Project Shine',
        projectDesc: 'Recreating Super Mario Sunshine physics in the Godot game engine. Used blender to model and animate to then import assets into the game. Implemented a camera system that has two modes, free roaming and follow mode.',
        tags: ['GDScript', 'Godot' ,'C#', 'Blender'],
        code: 'https://github.com/JasonAbsolute/ProjectShine',
        image: ProjectShineLogo
    },
    {
        id: 2,
        projectName: 'Ziggy\'s Labyrinth',
        projectDesc: 'A level based Snake game. Play through over 150 levels with unique mechanics and power-ups. Do you have what it takes to escape the Labyrinth?',
        tags: ['Java', 'GameDev','Pixel Art'],
        demo: 'https://store.steampowered.com/app/2383520/Ziggys_Labyrinth/',
        image: Ziggy
    },  
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/