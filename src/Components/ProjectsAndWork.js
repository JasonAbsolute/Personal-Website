import React from 'react'
import '../CSS/ProjectsAndWork.css'

class ProjectsAndWork extends React.Component {
    render() {
        return (<div>
                <h1 className="project">Projects and Work</h1>
                <p className="aboutThis"> This Page will tell you about what projects i have worked on all sorted by Work, School then Personal</p>
                <h2 className="work">Work Projects</h2>
                <h3 className="workTitle">Email Reminder</h3>
                <p className="bio">Programed in C# and SQL to create an email reminder that would remind developers of bugs, glitches,
                    features, and updates within a tracker for all in house technology. It would run the program in the
                    morning everyday at 8am to go through each tech issue. If the tech issue hasn't been claimed or worked on in 3 days
                    a reminder goes out to the all the techs wanting to know what the situation is with that issue
                </p>
                <h3 className="workTitle">Absolute Utilities</h3>
                <p className="bio">Solo project coded in Java and JavaFx allowing for efficient everyday tasks
                    such as, quoting, purchase ordering, and invoicing by becoming an automated process. Previous entries were saved to a text document
                    so if any passed orders need to be changed users can easily change the quote order. The App has one feature right now of making quotes but was
                    built so other features can be added easily.
                </p>
                <h2 className="work">School Projects</h2>
                <h3 className="workTitle">Senior Design: QueueUp</h3>
                <p className="bio">A mobile application used to connect many music services together such as: Apple Music, Spotify, Youtube Music, and more.
                    The app would let users connect to one service and allow songs to be queued from anyone's device.
                    This is done by starting a session and the users would connect to that session and then they would be allowed to queue songs to the phone playing music.
                    The application was made in Flutter because our goal was for any device to be able to run this and flutter enabled cross platform development.
                    I mainly worked on the front end of the application. This app was done by making API calls to then manage the queue and let the master phone be able to play the songs other users requested.
                </p>
                <h3 className="workTitle">Software Development Lab: Wizworm</h3>
                <p className="bio">A web application coded in React.js that took an old app called Chummer and made it more reliable and web based.
                    Chummer was an App for your desktop that would help manage characters you made in the game ShadowRun. Our app made it web based and fixed many issues that people had with the manager.
                    Issues were: Damage calculation being off, no testing, components of the app not updating when changed. Wizworm was focused on giving a more reliable place to manage your character. This project
                    was worked on all junior year and is now being worked on by a Senior Design team. This is the latest version that I have worked on with my team.
                </p>
                <h2 className="work">Personal Projects</h2>
                <h3 className="workTitle">Game Dev</h3>
                <p className="bio">
                    A bit of a passion to make video games. I've made a few mini Games in python using their game engine PyGame.
                    I've also learned a little bit of the Unity game engine.
                    Also used C++ to make a text based game based on the game Mugwump that made use of lots of classes. This project was to demonstrate that understanding of h files and heavy use of classes and how they all interact with each other.
                </p>
                <h3 className="workTitle">RobinHoodCrypto</h3>
                <p className="bio">
                    A python script that would make use of robin hoods API to get prices of certain crypto then using the data it pulls to notify me of certain price drops and good selling prices
                </p>
                <h3 className="workTitle">Skribbl-Discord</h3>
                <p className="bio">
                    A python application that would take an entire discord chat and make each message a new phrase for Skribbl.io. the program would take each message and remove the users name and time stamp
                    each message would have. This would make for some very interesting games of Skirbbl.io
                </p>
                <h3 className="workTitle">Tazer Cup Multiplayer</h3>
                <p className="bio">
                    Based on the video by Michael Reeves Tazer Cup I also made one. However, mine is played with 2 people racing against each other rather than the drinker racing against a timer.
                    This was coded in C and used arduino mini with wifi embedded into them so that the two cups would be able to
                    communicate with each other to see how full the cup was.
                </p>
                <h3 className="workTitle">This Website</h3>
                <p className="bio">
                    This site was coded in React.js with lots of CSS use. Website is public on Github so people can use it and change to
                    their liking. This site is also hosted on Github pages. Github pages is a challenge in itself for the
                    reason making new pages is quite hard so everything on this site has to be on one page

                </p>

            </div>

        )
    }
}

export default ProjectsAndWork