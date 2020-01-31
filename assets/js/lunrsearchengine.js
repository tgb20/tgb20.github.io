
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "This website serves as a log of any and all (when I remember) projects I have worked on. My goal is to have this website contain as much detail as possible, allowing for these projects to be revisited and used for reference in the future. As of now I am finishing my senior year of college at UMass Amherst studing CS Informatics. My goal is to find a job at a place where I feel challenged and I contribute to the world. Whether this is through teaching, building software for better energy, or just working on good projects, I look forward to what will come next. If you would like to check me out on other platforms you can check me out below! Twitter: Follow me on Twitter! Youtube: Please, subscribe on Youtube! Github: Head over to my Github! "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Site Under Construction                              :               I am in the process of rebuilding the website, so some information may be missing. :                                                                                                                                                                       Jacob Bashista                                31 Jan 2020                                                                                                                                                                                                                      All Projects:                                                                                                     RoosterMons              :       A fan Pokemon game using RoosterMons from the RT Extra Life stream poster. :                                                                               Jacob Bashista                21 Nov 2015                                                                                                                                     Xbox 360 Indie Development              :       I recently learned about the Microsoft Dreamspark program, and the Indie Dev tools for the Xbox 360. :                                                                               Jacob Bashista                18 Sep 2015                                                                                                                                     Sunflower Dance Party              :       This is a simulation I made in Maya for a class at UMass Amherst in high school. :                                                                               Jacob Bashista                07 Aug 2015                                                                                                                                     20 Years in Five Minutes              :       This is a simulation I made in Maya for a class at UMass Amherst in high school. :                                                                               Jacob Bashista                29 Jul 2015                                                                                                                                     Spherical Gravity Game              :       This was an idea for a game I had where you would solve puzzles on a series of spherical planets. :                                                                               Jacob Bashista                23 Feb 2015                                                                                                                                     OSC Controller              :       Using an Arduino with Processing I built an OSC remote control. :                                                                               Jacob Bashista                21 Feb 2015                                               &laquo; Prev       1        2        3      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Projects:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Projects:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://localhost:4000/underconstruction/",
    "title": "Site Under Construction",
    "body": "2020/01/31 - I am in the process of rebuilding the website, so some information may be missing. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/roostermons/",
    "title": "RoosterMons",
    "body": "2015/11/21 - A fan Pokemon game using RoosterMons from the RT Extra Life stream poster. About: In this Pokemon clone I was attempting to recreate a simple Pokemon game in Unity3D containing RTs RoosterMons. I got simple battles and tall grass to work, but lost motiviation to continue working on it as I started to need more art, and I am not good at pixel art. It also was taking a lot of time for a game that might not even be played by many people. The original description was “A pokemon clone I am creating to allow people to play as the Roosterteeth roostermons in an actual game. This is the first build and I hope to have it finished by the end of December. ” "
    }, {
    "id": 9,
    "url": "http://localhost:4000/xboxindie/",
    "title": "Xbox 360 Indie Development",
    "body": "2015/09/18 - I recently learned about the Microsoft Dreamspark program, and the Indie Dev tools for the Xbox 360. About: With Dreamspark you get access to a lot of Microsofts professional development software, including the libraries required for build an Xbox 360 game. Shortly after getting the software I made this quick demo, but I later found the access they provide to be quite slow and not that usful so I did not develop for the 360 any more. The original description was “This is a quick talk about exporting to the Xbox 360 and Microsoft DreamSpark” "
    }, {
    "id": 10,
    "url": "http://localhost:4000/sunflowerdance/",
    "title": "Sunflower Dance Party",
    "body": "2015/08/07 - This is a simulation I made in Maya for a class at UMass Amherst in high school. About: As its sole comment says “That is just a ball popping in and out of a funnel. ”. The original description was “Sunflower Dance Party by Kevin Macleod Check out my new website at jacobbashista. net” "
    }, {
    "id": 11,
    "url": "http://localhost:4000/twentyyears/",
    "title": "20 Years in Five Minutes",
    "body": "2015/07/29 - This is a simulation I made in Maya for a class at UMass Amherst in high school. About: Despite what it claims, its not accurate in anyway and has some typos. I would take it down but am leaving it up solely for archival purposes. The original description was “This is a video of the position of the planets for the next 20 years. Their distances from each other and their sizes is not accurate. Only their rotational position around the sun is accurate. Thanks for watching and subscribe for more. ” "
    }, {
    "id": 12,
    "url": "http://localhost:4000/solarcalc/",
    "title": "Solar Calc",
    "body": "2015/05/02 - SolarCalc is an app that helps you size your grid tied solar array to offset any portion (or all!) of your electric bill. About: Find out how much you can expect to pay when GridFree! NC manages your installation, and find out how much you may save with government incentives! Easy to use and understand. Using a database provided by the owner of the company and provided with basic information about your electrical bill and location I built a small search engine to compare your location with their rates. It was designed for their employees and potential customers to use. This app was taken down something in late 2018, early 2019 for not updating to new Play Store standards. The company it was built for no longer exists, so its not anything I plan on bringing back. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/spherical/",
    "title": "Spherical Gravity Game",
    "body": "2015/02/23 - This was an idea for a game I had where you would solve puzzles on a series of spherical planets. About: The video demonstrates one of the first puzzles, in which you have to grow an apple tree, but the seed spawning bugged out. This idea never really went anywhere, but I knew the main character would be a pig. The original caption was “I recently found a bug in the game I am currently making and I thought I might share it. ” "
    }, {
    "id": 14,
    "url": "http://localhost:4000/osccontroller/",
    "title": "OSC Controller",
    "body": "2015/02/21 - Using an Arduino with Processing I built an OSC remote control. About: This project is a weird “bodge” together of various components. The Arduino was running a relay script that let a Processing library control it directly. Within processing there were two apps, one running on my laptop, the other running on an Android tablet. Between the two apps a wireless OSC library was used to send information. You can learn more about OSC here. While OSC is designed mainly for sound and midi, I found a way to just use these same signals to control some LEDS.  "
    }, {
    "id": 15,
    "url": "http://localhost:4000/planetexplor/",
    "title": "Planet Explor",
    "body": "2015/02/20 - This game/educational tool was created using Unity and NASA 3D Resources. About: I was inspired to make this after making the AR demo in which I used a planet model. This was going to be the first game I would ever “sell” but never actually setup any store for it because the polish on the game was not to a high enough quality. The original description was “This is a trailer for my new program Planet Explor. Planet Explor lets you explore the solar system and find new information about our planets. This program is designed to teach people new and interesting things about our solar system. Available on Mac, Windows, and Linux” "
    }, {
    "id": 16,
    "url": "http://localhost:4000/augmentedreality/",
    "title": "Augmented Reality Demo",
    "body": "2015/02/04 - I made this project after watching the HoloLens announcement. About: I used Unity and the then Beta version of Vuforia. I don’t have a lot of information to say about this project. It was just a fun little experiment with building an AR app. It is also the first video I ever uploaded to YouTube. One item of note is the phone I used for the AR demo, the Sharp Aquos Crystal. It has incredibly small bezels for the time and even now, besides the giant chin. It was well before the 2017 bezel-less craze. I think it made a great demo phone for AR as it removed the space between real life and the AR world. The planet used in this demo inspired my next 2015 project, Planet Explor. Since then I have made a few AR apps, but none of which I have saved/uploaded in any form. The original description was “This is a demonstration of my augmented reality project. It was inspired by Microsoft HoloLens. I am going to continue updating it until it’s to a state I like. It looks amazing in person. ” "
    }, {
    "id": 17,
    "url": "http://localhost:4000/flappytaffy/",
    "title": "Flappy Taffy",
    "body": "2015/01/01 - I made this game using Unity for some friends in my homeschool group. About: I eventually released it on the Play Store but took it down after a year or so. You could play Flappy Bird as members of the group and it was just meant as a fun game for them. You can download the APK file for the app here. The original caption was “This is a fun little game I made for my local homeschool group. You play as 16 of the people as they navigate through series of random pipes. ” Here are some screenshots: "
    }, {
    "id": 18,
    "url": "http://localhost:4000/ftcscout/",
    "title": "FTC Scout",
    "body": "2014/11/17 - This app was developed in 2014 using AI2 to allow FTC teams to share scouting data in one global database. About: In FTC a crucial part of each competition was collecting scouting data. This data helped you determine what your allies and opponents could do. Often teams would collect this information on pen and paper, sorting it back at their pit. My goal with FTC Scout was to allow teams to focus less on the yes and no side of scouting and more on the strategy and planning side. If one team used the app, filling out their own, or other teams’ information, then every team using the app would have access to the data. This was the first app I ever published an android app and also was my most successful (of 3). I have since taken down the app as its content is not relevant to current FTC competitions and I haven’t felt like updating it. This apps code was also in my lost AI2 account I mentioned in MarkBot, but the tutorial I used for the original app can be found here. I modified it to match my needs. This app was also the first time I had ever worked with PHP and I still avoid it to this day. Maybe if I sat down and properly learned it I might find some use, but I prefer Google Cloud Functions now. At its peak this app had over 5000 installs and 900 teams registered. It was great watching it grow. I would see one team discover it and start filling in their competition information. I could watch this spread by location, such as in Michigan where FIRST is extremely popular. At the end of its life it had 4. 4 Stars and according to the Google Play Console it is still installed on 2 active devices. It won our team two awards at competitions for the connections it built between teams. You can download the APK file for the app here, but the database that runs it is long dead. The original description was: “This app has won two Awards: NC East Regional Connect Award NC State Judges Award This app allows you to submit your teams scouting info and view other teams. This app allows you to start developing your game plan with people instantly. You just search for their team name/number and you instantly know what they can do. Start planning instantly. If you need to update your info you just submit a new team and our admins will remove your old one. ”å Here are some screenshots: "
    }, {
    "id": 19,
    "url": "http://localhost:4000/markbot/",
    "title": "Markbot",
    "body": "2014/07/25 - I created Markbot in 2014 as my friend Mark was leaving for college. About: Nearly every month we would either play board games or have movie marathons. This was going to be an issue when he left for college. The core mechanics of Markbot were built from and NXT LEGO set. The base was a modified rubics cube solver I had built previously that month. This is the solver I built: Mindcubr. On the software side I had a skype call running on my iPhone 5, though I am not sure how I recorded this video as it was the only camera I owned. The NXT robot was being remotely controlled by an app I wrote with AI2. Unfortunately, I do not have the account I used to create this app anymore and cannot recover the code. The android tablet I was using, an original Nexus 7, was remotely controlled through my computer. On my computer I was running TeamViewer, which allowed Mark to remotely control my computer, and by proxy the tablet. This entire system worked pretty smoothly, and I was happy with the results. Looking back on it now I know how complicated I made everything and if I rebuilt it today, which I am considering as a future project, I would make the entire system much simpler and remove the computer from the equation entirely. Opting for peer-to-peer control of the robot. The original caption was “Markbot!!!!!!” "
    }, {
    "id": 20,
    "url": "http://localhost:4000/musicalfloppydrive/",
    "title": "Musical Floppy Drive",
    "body": "2014/01/01 - Using an Arduino, Floppy Disk Drive, and an old computer power supply I created a system that allows the playback of music on a single floppy drive. About: This was inspired by this video: I used the original Moppy to control the drive. You can find an updated version here. "
    }, {
    "id": 21,
    "url": "http://localhost:4000/click/",
    "title": "Click",
    "body": "2013/09/22 - This game was made in about 20 minutes to test uploading games to Kongregate. About: Not very creative or exciting, just a simple cookie clicker game, but without any gameplay. The picture above was the entire game. My friend Mark from Markbot currently has the high score at 4,040. I would say go beat that but the dropbox link I used to host the game has gone away so it can’t be played. You can still view the original game page here with the scores and comments. The original caption was “Click! A fun game with no point but to click more than your friends!” "
    }, {
    "id": 22,
    "url": "http://localhost:4000/simplegame/",
    "title": "Simple Game",
    "body": "2013/01/01 - This is the project I have the least information about, but I am including it here because of its importance to myself. About: This was the first game I ever made, it was the first time I ever shared a project I made with someone, and it was the first time I used a development environment that wasn’t notepad . bat files. I made Simple Game (it’s actual title) using Construct 2 on the car ride home from somewhere. Simple game consisted of a single green cube with eyes and a mouth made from rectangles that could hop around the screen using some button prompts on the bottom of the screen. There was a floor and some walls to keep the player from leaving the screen, but that was it. I use Simple Game as my hello world for every new game engine I learn. I used it for Unity, Love2D, SpriteKit, and several others. This game holds a special place in my heart. I even recreated it a few years later with two players and socket based multiplayer when I was learning how to use sockets. Unfortunately, beyond this web page there is no record the original game exists. I made it with my original laptop, which I received Christmas 2012 with a copy of SimCity Societies and Civilization IV. I sold this laptop a few years later and wiped the hard drive with it. That laptop and this game mark the start of my love for programming and games. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/hexbugrc/",
    "title": "Hexbug RC Car",
    "body": "2011/08/30 - This RC car was made by using a hex bug, some hot glue, and LEGO pieces. About: While this car was limited in its capabilities, mainly it could only go forward and backwards, it is the earliest maker project I have record of. It was later rebuilt at my grandmother’s house to use a propeller to move at a much faster rate on a matchbox car style body. Unfortunately, there is no record of this. I have spent awhile trying to find the exact hex bug I used, and it doesn’t seem to exist. It had two legs, one on each side and could work its way around using a remote control. The original caption was “How to build a remote-control car: rip apart a hex bug and legos here and there and tada!!!!!!! you have to figure out the rest” "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});