// mui
import CodeIcon from '@mui/icons-material/Code';
import Groups2Icon from '@mui/icons-material/Groups2';
import EventIcon from '@mui/icons-material/Event';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const UniversityData = [
    {
        id : 1,
        header : 'CLUBS',
        writeup : 'University Chapters clubs are where like-minded students can come together to dive deeper into specific tech domains. These clubs focus on areas like Blockchain, AI, machine learning, and more. Joining a club provides an opportunity to engage in in-depth discussions, collaborative projects, and skill-building activities. Whether you are a newcomer or an experienced tech enthusiast, our clubs offer a supportive environment for honing your expertise.',
        icon : <Groups2Icon style={{ color : '#130395', fontSize : '44px' }} />,
    },
    {
        id : 2,
        header : 'DEV.FEATURES',
        writeup : 'Our University Chapters provide an array of developmental features that foster growth and excellence. These include mentorship programs, code review sessions, and collaborative coding projects. Through such initiatives, you can receive valuable feedback from experienced mentors, improve your coding skills, and gain practical experience in working on real-world projects.Features aim to bridge the gap between classroom learning and real-world applications, preparing you for success in the tech industry.',
        icon : <CodeIcon style={{ color : '#130395', fontSize : '44px' }}  />,
    },
    {
        id : 3,
        header : 'EVENTS',
        writeup : 'Our University Chapters are dynamic hubs of activity, consistently hosting a variety of events that cater to both tech enthusiasts and learners. From expert talks and panel discussions to hands-on workshops and coding challenges, these events provide a platform for students to immerse themselves in the latest trends and advancements in technology. Stay connected with your local University Chapter to stay informed about upcoming events that can enrich your tech journey.',
        icon : <EventIcon style={{ color : '#130395', fontSize : '44px' }}  />,
    },
    {
        id : 4,
        header : 'HACKATHON',
        writeup : 'Imagine the thrill of collaborating with fellow students to solve real-world challenges within a limited timeframe. Our University Chapters organize hackathons that encourage teamwork, creativity, and innovation. Whether you are a developer, designer, or someone with a keen interest in tech, these hackathons offer a space to showcase your skills, learn from peers, and possibly turn your ideas into tangible solutions.',
        icon : <IntegrationInstructionsIcon style={{ color : '#130395', fontSize : '44px' }}  />,
    },
]

export default UniversityData