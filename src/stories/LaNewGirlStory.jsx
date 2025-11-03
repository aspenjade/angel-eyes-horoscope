import React, { useState } from 'react';

function LaNewGirlStory() {
  const [step, setStep] = useState(0);
  const [hookedUp, setHookedUp] = useState(false);
  const [morningtext, setMorningText] = useState(false);

  const storySteps = [
    // 0
    {
      text: `You're touring an epic house by Venice Beach CA. You think one of the guys, Daniel, who lives there seems to be flirting with you and HES HOT. At the end of the tour you tell them you won't be moving in because the room is too small. You leave :) What do you do next?`,
      choices: [
        { text: "Send a follow up text to the entire house to thank them", next: 1 },
        { text: "Send a text to just Daniel", next: 2 },
        { text: "Do nothing, after all they already have your number", next: 3 },
      ],
    },
    // 1
    {
      text: `Okay I see you... You want to keep things going but you're still playing it safe. What do you want to say?`,
      choices: [
        {
          text: "\"I'm so sad to say no to living with you guys - I am absolutely on the hunt for friends so can I please recruit you all?\"",
          next: 15,
        },
        {
          text: "\"Thanks for the tour, sorry it didn't work out\"",
          next: 22,
        },
      ],
    },
    // 2
    {
      text: `OOOOOOOH feeling flirty?? What do you want to say?`,
      choices: [
        { text: "hey it was so nice meeting you. Wanna get dinner sometime?", next: 6 },
        { text: "Thanks so much for showing me around", next: 22 }
      ],
    },
    // 3
    {
      text: `After three months, and honestly forgetting that Daniel exists. He sends you a Partiful inviting you to his sunset BBQ in 2 days.`,
      choices: [
        { text: "You like the message", next: 4 },
        { text: "Reply: \"Wow it's been a while, I'll be there!\"", next: 5 },
        { text: "Reply: \"Hi thanks but I'm busy on Saturday\" — it's enough to know he's thinking about you", next: 12 },
        { text: "Reply: \"Hi thanks but I'm busy on Saturday, want to get lunch this week instead?\"", next: 14 },
      ],
    },
    // 4
    {
      text: `Do you want to show up... unannounced?`,
      choices: [
        { text: "Hell yeah", next: 5 },
        { text: "No, I'll go to the next thing he invites me to", next: 13 },
      ],
    },
    // 5
    {
      text: `Daniel sees you walk through the door, immediately comes over and gives you a hug. He says "I'm glad you came." Afterwards a text shows up on your phone... it says "Wanna have lunch this week?" You reply with...`,
      choices: [
        { text: "Make it dinner and it's a yes!", next: 6 },
        { text: "Absolutely", next: 14 },
      ],
    },
    // 6
    {
      text: `He agrees! You go to dinner and it's INCREDIBLE and after he invites you over to his house to watch old movies.`,
      choices: [
        { text: "You obviously say yes, only good can come from that", next: 7 },
        { text: "You have work tomorrow at 8am and you do have self control, so you say no.", next: 21 },
      ],
    },
    // 7
    {
      text: `Next thing you know you're in his room and wow it's so nice! The mood lighting is ON POINT and it's so cozy in here. You guys put on Monsters Inc but you can tell he wants to hook up... do you?`,
      choices: [
        { text: "YES", next: 8, setHookedUp: true },
        { text: "NO", next: 17 }
      ],
    },
    // 8
    {
      text: `So the sex is pretty good but there's definitely room to grow ;) A first time is always tricky isn't it? He asks "Do you want to stay the night?"`,
      choices: [
        { text: "You say 'Are you sure?'", next: 9 },
        { text: "NO, mornings are hard and you have work at 8am", next: 17 },
        { text: "OBVIOUSLY you stay, you want to live in his ab muscles", next: 11 },
      ],
    },
    // 9
    {
      text: `He says "yeah" but seems hesitant.`,
      choices: [
        { text: "You stay because you like the way it feels to be close to him", next: 11 },
        { text: "You go home", next: 17 },
      ],
    },
    // 10
    {
      text: `You wake up the next morning, and he feels a million miles away. The air is so tense you feel like you could cut it with a knife. Mornings ARE hard, something must have switched in his mind...`,
      choices: [
        { text: "Ask him 'What's wrong?'", next: 27 },
        { text: "Leave immediately telling him you have to go to work soon", next: 17 },
      ],
    },
    // 11
    {
      text: `You wake up the next morning, and he feels a million miles away. The air is so tense you feel like you could cut it with a knife. Mornings ARE hard, something must have switched in his mind...`,
      choices: [
        { text: "Ask him 'What's wrong?'", next: 27 },
        { text: "Leave immediately telling him you have to go to work soon", next: 17 },
      ],
    },
    // 12
    {
      text: `He doesn't send any message back...`,
      choices: [
        { text: "You start thinking about the BBQ invite and looking at your calendar", next: 4 },
        { text: "You let it go.", next: 13 },
      ],
    },
    // 13
    {
      text: `AND JUST LIKE THAT, you never talk again. Maybe this one just wasn't meant to be. Better luck to you both next time, don't cry too hard now <3`,
      ending: true,
    },
    // 14
    {
      text: `You show up to lunch and Daniel has brought his friend Nate with him. You thought this was going to be one-on-one... of course you still enjoy the lunch and company. Afterwards you send Daniel a text:`,
      choices: [
        { text: "Super fun, can't wait to do it again!", next: 13 },
        { text: "Had a great time at lunch, wanna get dinner just us next week?", next: 6 },
      ],
    },
    // 15
    {
      text: `Daniel sends a text back saying "My recruitment fee is one meal." You...`,
      choices: [
        {
          text: "Reply to the group saying \"I agree to the terms if one meal refers to consumable solids and not drinks\"",
          next: 3,
        },
        {
          text: "Text just Daniel saying \"Dinner when and where?\"",
          next: 6,
        },
      ],
    },
    // 16
    {
      text: `The group loves your vibe. You're in. You’ve now got a new crew, and possibly a slow-burn romance on the horizon. It's giving LA rebirth.`,
      ending: true,
    },
    // 17 - Game night begins
    {
      text: `A few days later, you're hosting a cozy game night. Daniel shows up late but brings wine. You're having fun — it's light, it's easy. As he's leaving, you say: "Can I come with you?" He pauses and says, "Yeah, but I'm leaving right now."`,
      choices: [
        {
          text: "Go with him right now",
          conditionalNext: (flags) => (flags.hookedUp ? 18 : 29)
        },
        { text: "Grab your toothbrush and keys and leave", next: 19 },
        { text: "Decide not to go — thats a strange comment to make", next: 20 },
      ],
    },
    // 18 - You impulsively go with him
    {
      text: `You slip on your shoes and leave with him right then. He says "sorry about being weird the other night, just had a lot on my mind, nothing to do with you."  He pauses and says "I really like you, I want you to stay but I dont want to do anything".  Of course that doesn't happen, his doing... and the next morning he tells you he doesnt want this to continue anymore.  talk about STING.  
      But if someone has "a lot on their mind" the night after hooking up especially that early, its probably best to just walk away.  Hopefully you're a better snapchatmindgames player in the future.  Better luck next time <3 this guy sucked`,
      ending: true,
    },
    // 19 - You bring your toothbrush
    {
      text: `You grab your keys and your toothbrush. You hook up again. The next morning as you're rushing to get home to get ready for work, you forget your toothbrush. The next day, he texts you: "You're great, but I think I see us more as friends."  You find out later he threw your toothbursh away... ouch, I wouldn't bring over anything like that so soon.  I think you spooked him.  Better luck next time... have fun never seeing him again. Sorry the snapchatmindgames are so brutal <3`,
      ending: true,
    },
    // 20 - You stay behind
    {
      text: `You say "Maybe another time." He hugs you tight and leaves, saying "sorry I just have a lot on my mind right now."`,
      choices: [
        { text: "you understand, something must be going on with him", conditionalNext: (flags) => (flags.morningtext ? 38 : 21) },
        { text: "You feel like he's not giving you anything", next: 33 },
      ],
    },
    //21
    {
      text: `You wake up to a text from him that says  "last night was so fun", You reply "Yeah it was!" A few days later he texts you again: "What are you doing tonight?" You reply with...`,
      choices: [
        { text: "Not sure, kind of in the mood for that movie", next: 7, setMorningText: true },
        { text: "I'm having dinner with a friend tonight", next: 23, setMorningText: true },
      ],
    },
    //22
    {
      text: `no response...`,
      choices: [
        { text: "Keep living your life ✨", next: 3 }
      ]
    },
    //23
    {
      text: `Do you want to ask him out at a later date?`,
      choices: [
        { text: "YES", next: 24 },
        { text: "NO WAY", next: 13 },
      ],
    },
    //24
    {
      text: `You suggest a friday night drive in your convertible Mustang to the Hollywood sign to see the city lights. He agrees. You drive up there and sit on the hood of your car looking out at the city. It's beautiful and quiet. He turns to you and says "I've never met anyone like you before" Do you kiss him?`,
      choices: [
        { text: "OBVIOUSLLLLLYYYYYY - i mean look at him!!!", next: 26 },
        { text: "not yet..", next: 25 },
      ],
    },
    //25
    {
      text: `Sometimes you have to give a little, it can't just be all take.  If you can't be more open you'll be stuck playing snapchatmindgames forever.   He takes your energy to mean you aren't interested.  Sorry, better luck next time <3`,
      ending: true
    },
    // 26
    {
      text: `You kiss him.  Its incredible a 10/10.  You feel like you're in a movie....Its been 4 months since that night.  Your snapchat streak is going strong and hes meeting your best friends next week.  Things are looking good :). CONGRATS snapchatmindgames champ <3`,
      ending: true
    },
    // 27 - The next morning after game night
    {
      text: `He says nothing, but you can tell something is off. The tension is palpable.
       After a long pause, he finally speaks: "Yeah i'm sorry i just dont know".
        Staying calm, you put on your shoes planning to just leave with the small amount of dignity you have left.  
        He stops you by the door, as youre reaching for the handle, he stops you and hugs you for a while..
        Its confusing, it feels like goodbye.  and it is.  He never texts you again. GHOSTED Sorry babe.  Better luck next time <3`,
      ending: true
    },
    // 28 - 
    {
      text: `You suggest a friday night drive in your convertible Mustang to the Hollywood sign to see the city lights. He agrees. You drive up there and sit on the hood of your car looking out at the city. It's beautiful and quiet. He turns to you and says "I've never met anyone like you before" Do you kiss him?`,
      choices: [
        { text: "OBVIOUSLLLLLYYYYYY - i mean look at him!!!", next: 26 },
        { text: "not yet..", next: 25 },
      ],
    },
    // 29
    {
      text: `You both walk to his car together, he seems off.  You wanna ask him whats wrong?`,
      choices: [
        { text: "yeah i kind of do", next: 30 },
        { text: "not really..", next: 34 },
      ],
    },
    // 30
    {
      text: `"You seem off, is something bothering you?". he looks at you with a sad smile and pulls you into a hug. "I'm sorry, it has nothing to do with you.  I just have a lot on my mind right now with my dads business, hes about to lose it.  I'm glad you're coming over, but can we just sleep".`,
      choices: [
        { text: "You hug him back and say \"of course, that sounds so nice.\"", next: 32 },
        { text: "You go home, thats not why youre going over", next: 31 },
      ],
    },
    // 31
    //if you talk all night then sleep together its good!
    {
      text: `"I mean okay, yeah if thats what really mattered to you, you can just get on tinder.  youre damn good at those snapchatmindgames `,
      ending: true,
    },
    //32
    {
      text: `You get back to his place and he seems a lot more relaxed.  You end up talking all night.  You head home in the morning exhaused glad its saturday cuz you're going right to sleep."`,
      choices: [
        { text: "go take your nap", next: 21 },
      ],
    },
    //33
    {
      text: `"You know what, I think you're right. Daniel hasn't been giving you anything really, and you deserve more.  You decide to delete his number and move on. GOOD FOR YOU, consider yourself a snapchatmindgames expert<3"`,
      ending: true,
    },
    //34
    {
      text: `After you get to his place, you can tell his energy is really off.  You wanna leave?`,
      choices: [
        { text: "hell yeah, i'm calling the UBER right now", next: 35 },
        { text: "I want to stay", next: 36 },
      ],
    },
    //35
    {
      text: `You leave, sending him a text saying "I had fun but I think we should just be friends" aka we should never talk again HEHEHEHEH I'M SO GLAD YOU GOT TO BE THE ONE TO DO THAT good for you <3... snapchatmindgames are over and youre the gold medalist`,
      ending: true,
    },
    //36
    {
      text: `okay so you guys hook up.  After he says you can stay but you can tell hes just trying so hard not to be an asshole. I hate that. You wanna leave?`,
      choices: [
        { text: "yeah i would rather sleep outside", next: 35 },
        { text: "but i'm lazy and this bed is comfortable", next: 37 },]
    },
    //37
    {
      text: `The morning is so awkward and you're just kicking yourself for staying.  You leave and you get ghosted. Snapchatmindgames are hard, this guys an ass.  better luck next time <3`,
      ending: true,
    },
    //38
    {
      text: ` "Daniel sends you a text \"Hi are you free friday?\"`,
      choices: [
        { text: "you reply with \"Yeah i'm free, can I decide what we do?\"", next: 28 },
        { text: "Youre really not feeling daniel actually", next: 33 },
      ],
    },
  ];

  const current = storySteps[step];

 return (
  <div className="app">
    {/* 🎵 Spotify player above story */}
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
            <button
              key={index}
              onClick={() => {
                // Set flags if present
                if (choice.setHookedUp) setHookedUp(true);
                if (choice.setMorningText) setMorningText(true);

                const flags = { hookedUp, morningtext };

                // Use conditionalNext if present, otherwise just use next
                if (choice.conditionalNext) {
                  setStep(choice.conditionalNext(flags));
                } else {
                  setStep(choice.next);
                }
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);
}
export default LaNewGirlStory;
