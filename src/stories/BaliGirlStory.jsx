import React, { useState } from 'react';

function BaliGirlStory() {
  const [step, setStep] = useState(0);

  const storySteps = [
    //1
    {
      text: `You've just checked into your beautiful bright bali villa, plants everywhere, a sliding glass door that leads right to a pool, and a sun soaked bedroom to die for.  Right outside your house is a pink branded vegan place called KYND. It's the perfect spot to start your trip here :) \n\n You notice that this woman who looks about your age has been glancing over quite a bit.. what do you do? `,
      choices: [
        { text: 'strike up a conversation saying "Hi :) How long have you been in Bali?"', next: 1 },
        { text: 'wait for her to say something', next: 21 },
      ],
    },
    //2
    {
      text: `She looks at you and smiles and says "Oh hi, my name is Dalia.  I live here now actually, I'm from Europe but I work here as a lifestyle influencer."  You both chat for a while and shes so lovely.  At one point the conversation lulls, what do you wanna say?`,
      choices: [
        { text: '"Do you have any plans tonight?"', next: 23 },
        { text: '"Do you have any recomendations for me?"', next: 28 },
        { text: 'nothing, I have not even eaten any food yet...', next: 3 },
      ],
    },
    {},
    //3
    {
      text: `The waiter comes over and hands Dalia her check.  She pays for her meal, as shes getting up she looks at you and says "It was so nice to meet you, by the way a bunch of us are getting together at Old Mans later, you should come"  You..."`,
      choices: [
        { text: 'Say "yeah that sounds fun I will definitly be there"', next: 38 },
        { text: 'Say "thanks so much for inviting me, I will think about it, can I have your number so I can let you know', next: 5 },
      ],
    },
    //4
    {
      text: `actually pretty smooth on your part...she says "Omg of course, i know you just got in today so we can definitly hang out later if not tonight!"`,
      choices: [
        { text: 'Swap Numbers', next: 5 },
      ],
    },
    //5
     {
      text: `"Considering you're jet lagged and here for a long time.  Do you wanna go out tonight? "`,
      choices: [
        { text: 'hell yeah, send it!', next: 6 },
        { text: 'no its okay I will have plenty of time to go out here', next: 37 },
      ],
    },
    //6
    {
      text: `WOOO YES!!!! You can never have too many fun nights out can you?`,
      choices: [
        { text: 'Text Dalia saying "hey i\'m going to come out after all!"' , next: 7 },
      ],
    },
    //7
    {
      text: `Dalia texts you and says "come around 11 ish!"  You get to old man's around 10:45 and get yourself a drink.  Around 11 this BEAUTIFUL woman, Ces, sits down next to you at the bar and starts talking to you.  You find out she's a fellow traveler, an american, a surfer.  she's one of the coolest people you've ever met.  Before you know it you've been chatting for an hour and Dalia still hasn't shown up...Ces asks if she can see your place`,
      choices: [
        { text: 'Go with Ces back to your place, if Dalia cant be on time or even text you...she obviously does\'t want to see you' , next: 8 },
        { text: 'Tell Ces you\'re waiting for a friend', next: 9 },
      ],
    },
    //8
    {
      text: `You wake up in your beautiful villa. The sun is shining through your curtains and youre greeted by the bali fresh air.  Wow, youre so grateful to be here.  You reach over to the otherside of the bed but Ces is gone.  And so is your wallet, and your passport and all your clothes.   Better get your butt to the embassy, good luck walking there you broke baby.  Looks like you were bamboozled by the snapchatmindgames.  Better luck next time`,
      ending: true
    },
     //9
    {
      text: `So dalia never showed up, you decide to book a surf lesson for tomorrow...The next morning however, you wake up to a text from dalia that reads "Hiii, i'm so sorry about last night.  I was on my way home from pole dancing class and I ended up hitting a bump on my scooter and fell off.  I'm fine though, don't worry.  Just really scratched up.  I ended up going to get checked out and then obviously going home"`,
      choices: [
        { text: 'are you okay?  Can I bring you something?' , next: 11 },
        { text: 'pole dancing?', next: 10 },
      ],
    },
    //10
    {
      text: `WOW SOMEONE WAS HURT AND THATS ALL YOU CAN SAY - SHE OBVIOUSLY NEVER SPEAKS TO YOU AGAIN.  AND YOU SHOULD BE BETTER... GO WORK ON YOURSELF.`,
      ending: true
    },
    //11
    {
      text: `She replies, "no its okay really, I'm just bored now that I cant do anything"`,
      choices: [
        { text: 'insist on coming by to bring her something' , next: 12 },
        { text: 'Say "Okay, I\'m taking a surfing lesson. I\'ll check back in later with you"', next: 13 },
      ],
    },
    //12
    {
      text: `Dalia reads into your comments as pushy, she blocks your number and you don't see her again"`,
      ending: true
    },
    //13
     {
      text: `She replies "Oh okay, well have fun! Let me know how it goes!" A few days later you decide to grab some lunch at KYND again, and who do you see there?  Dalia!  She waves you over and asks if you want to come over to her place later for dinner with some friends she has visiting from Europe.  You...`,
      choices: [
        { text: 'Say "Of course!"' , next: 14 },
        { text: 'Say, "I\'m actually going night surfing, lets get breakfast tomorrow!"', next: 44 },
      ],
    },
    //14
    {
      text: `Dinner is amazing and so is the company.  Dalia is so sweet and welcoming and her friends are so cool.   Everyone in the group is super buzzed from all the wine.  You notice the kitchen is super messy from dinner, do you want to offer to help clean up?`,
      choices: [
        { text: 'yes' , next: 15 },
        { text: 'naw, dishes are not my thing', next: 20 },
        { text: 'I\'m not going to ask, I\'m just going to do it!', next: 16 },
      ],
    },
    //15
    {
      text: `She looks at you and says "Oh no its okay, I will handle everything tomorrow! CUZ RIGHT NOW WE ARE GOING OUT DANCING WANNA COME!"  You...`,
      choices: [
        { text: 'POUR YOURSELF A SHOT AND SAY YES' , next: 41 },
        { text: 'say "Im sleepppppyyy so I\'m going home"', next: 40 },
      ],
    },
    //16
    {
      text: `You're almost done putting the last few plates into the dishwasher.  Dalia comes up behind you and says "hi", You ask "whats everyone else doing?" She says "Oh everyone else left, its just you and me here now"  You...`,
      choices: [
        { text: 'Say something flirty' , next: 17 },
        { text: 'Say something casual', next: 18 },
      ],
    },
    //17
    {
      text: `"You say "sw28slkddjf xxx slkdpwlsls aslkxxxxslsl ;)", she smiles and says "I was hoping you would say something like that". YOU SPEND THE NIGHT TOGETHER then end up traveling to thailand and korea for the next three months ;) YOURE SO GOOD AT SNAPCHATMINDGAMES!! Congrats on your new love!`,
      ending: true
      
    },
    //18
    {
      text: `You say "there were a lot of dishes", she replies with "yeah...well you should probably get going huh, its getting late and I have a busy day tomorrow"  You leave and never see her again.  Better luck next time, SNAPCHATMINDGAMES IS HARD`,
      ending: true
      
    },
    //19
    {
      text: `You're almost done putting the last few plates into the dishwasher.  Dalia comes up behind you and says "hi", You ask "whats everyone else doing?" She says "Oh everyone else left, its just you and me here now"  You...`,
      choices: [
        { text: 'Say something flirty' , next: 17 },
        { text: 'Say something casual', next: 18 },
      ],
    },
    //20
    {
      text: `...Casey gets up (Dalia's really hot friend who does yoga) and starts doing the dishes.  10 minutes later Dalia starts indicating its time to leave... shes definitly HOOKING UP WITH CASEY and not you.  but honestly bro, not only did Dalia make all the food, she also bought it, and all you did was bring a lousy bottle of 5 dollar wine. You kind of suck at SNAPCHATMINDGAMES.  Better luck next time`,
      ending: true,
    },
    //21
    {
      text: `hmmmm she keeps looking over at you but she doesn't say anything.  Do you want to say something?`,
      choices: [
        { text: 'Yes, ask her how she likes traveling!', next: 32 },
        { text: 'I will still wait for her to say something', next: 22 },
      ],
    },
    //22
    {
      text: `She finishes her meal and leaves without saying anything to you. Sometimes you have to be the one to take the shot! Its tough out here.  Better luck next time`,
      ending: true,
    },
    //23
    {
      text: `She says "Yeah actually i'm busy tonight but I'm free tomorrow if you wanna go to the beach club?"`,
      choices: [
        { text: 'I\'ll go!', next: 24 },
        { text: 'I\'m swim shy', next: 33 },
      ],
    },
    //24
    {
      text: `You meet Dalia at La Brisa. The beach club is beautiful, the drinks are strong, and the vibes are immaculate.  You both get along so well, the sun starts to set...`,
      choices: [
        { text: 'make a move', next: 36 },
        { text: 'comment on the sunset', next: 26 },
      ],
    },
    //25
    {
      text: `You meet Dalia at La Brisa. The beach club is beautiful, the drinks are strong, and the vibes are immaculate.  You both get along so well, the sun starts to set...`,
      choices: [
        { text: 'make a move', next: 36 },
        { text: 'comment on the sunset', next: 26 },
      ],
    },
    //26
    {
      text: `The rest of the night is lovely, but nothing interesting happens, if you know what i mean.  A few days later, Dalia invites you over for dinner at her place with her friends.  You...`,
      choices: [
        { text: 'Definitly go', next: 14 },
        { text: 'tell her you have plans', next: 27 },
      ],
    },
    //27
    {
      text: `You text her later to hang out and she replies that she started dating someone who came to her dinner party.  SNAPCHATMINDGAMES anything can happen.  Better luck next time`,
      ending: true
    },
    //28
    {
      text: `she says "actually yeah, you've probably heard about the beach clubs here.  They can get kind of crazy but theres one called la brisa thats super nice.  I'm acutally going there tomorrow, you wanna join me?"`,
      choices: [
        { text: 'YES!!!!' , next: 25 },
        { text: 'NO, I\'m more of a hiking type!', next: 29 },
      ],
    },
    //29
    {
      text: `she says "dang we might not have that much in common, but if you like going out...my friends and I are going to Old Man's tonight.  You should come by.  She asks for your number..."`,
      choices: [
        { text: 'give it to her' , next: 30 },
        { text: 'thats so soon...', next: 31 },
      ],
    },
    //30
    {
      text: `You text her later that night to let her know you're coming to Old Man's tonight. You get a notification on your phone" `,
      choices: [
        { text: 'open your phone' , next: 7 }
      ],
    },
    //31
    {
      text: `UMMMMMMM its 2025, its okay to give someone your number.  Dalia ends up walking out and you don't ever see her again.`,
      ending: true
    },
    //32
     {
      text: `She looks at you and smiles and says "Oh hi, my name is Dalia.  I'm not traveling, I live here now actually!  I'm from Europe but I work here as a lifestyle influencer."  You both chat for a while and shes so lovely.  At one point the conversation lulls, what do you wanna say?`,
      choices: [
        { text: '"Do you have any plans tonight?"', next: 23 },
        { text: '"Do you have any recomendations for me?"', next: 28 },
        { text: 'nothing, I have not even eaten any food yet...', next: 3 },
      ],
    },
    //33
     {
      text: `For whatever reason she thinks that soo cute and she says "aww thats okay, i'm doing a dinner party later you should come"`,
      choices: [
        { text: 'say "I\'ll go!"', next: 14 },
        { text: 'say "maybe next time"', next: 34 },
      ],
    },
    //34
    {
      text: `For whatever reason she thinks that soo cute and she says "aww thats okay, i'm doing a dinner party later you should come"`,
      choices: [
        { text: 'say "I\'ll go!"', next: 14 },
        { text: 'say "maybe next time"', next:35 },
      ],
    },
    //35
    {
      text: `wow thats two things you've denied.  Dalia ends up leaving the restaraunt and you never see her again. Sorry SNAPCHATMINDGAMES got you this time!`,
      ending: true
    },
    //36
    {
      text: `You suggest a sunset swim in the ocean :) Lets just say that goes reallllllly well and you end up staying in bali for longer than you expected!! congratulations you are a SNAPCHATMINDGAMES expert.`,
      ending: true
    },
    //37
     {
      text: `You've been enjoying bali, seeing the temples, hiking, swimming.  About a week later Dalia texts you and invites you to join her a beach club`,
      choices: [
        { text: 'go with her!', next: 24 },
        { text: 'say "maybe next time"', next:35 },
      ],
    },
    //38
    {
      text: `Dalia says great me and my friends should be there "around 11 ish!"  You get to old man's around 10:45 and get yourself a drink.  All of a sudden this SUPER PRETTY woman, Lola, sits down next to you. She's american, a model, and on break from getting her masters degree at columbia :) After chatting for a while she asks if she can see your place... she seems genuinely curious`,
      choices: [
        { text: 'Go with Lola back to your place, Dalia still has not even shown up' , next: 39 },
        { text: 'Tell Lola you\'re waiting for a friend', next: 9 },
      ],
    },
    //39
    {
      text: `While you're in the bathroom, LOLA takes everything you own and leaves...she even takes your phone.  Dang, can't trust anyone playing these snapchatmindgames.  Better luck next time.`,
      ending: true
    },
    //40
    {
      text: `While you're sleeping Dalia meets someone who tells here a bunch of gossip about you... hopefully its not true. But dalia doesn't trust you anymore.  Good luck next time :)`,
      ending: true
    },
    //41
    {
      text: `You all head to FINNS beach club and what a vibe!  Do you want to buy Dalia a drink and ask her to dance?`,
      choices: [
        { text: 'YESS lets get the giant margarita to share' , next: 42 },
        { text: 'Lets play it low key for now', next: 43 },
      ],
    },
    //42
    {
      text: `You both share this neon margarita and dance the night away!! You hit it off so much you're actually traveling to thailand together next week!! Good work :) You're a snapchatmindgames champion`,
      ending: true
    },
    //43
    {
      text: `Dalia meets this reallly realllly hot traveler named Noah and she doesn't even notice you leave the club.  I dont think this one was meant to be. better luck next time :)`,
      ending: true
    },
    //44
    {
      text: `While trying to get your surfboard from the car, you trip and fall for no good reason.  You end up breaking your foot in 3 places and having to head back home to heal...dalia texted you once more to check in but that ship is out sailing with the other hot travelers. Better luck next time!`,
      ending: true
    },
    

    
    
   
    
  ];

  const current = storySteps[step];

 return (
  <div className="app">
    {/* 🎵 Spotify music player stays mounted */}
    <div className="music-player mb-6">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/0AS5gAZBcpQsNAcxlBRHJK?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    {/* 📖 Story content */}
    <div className="story">
      <p className="story-text">{current.text}</p>

      {current.ending ? (
        <div className="ending">
          <p><strong>THE END</strong></p>
          <button onClick={() => setStep(0)}>Start Over</button>
        </div>
      ) : (
        <div className="choices">
          {current.choices.map((choice, index) => (
            <button key={index} onClick={() => setStep(choice.next)}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

}

export default BaliGirlStory;