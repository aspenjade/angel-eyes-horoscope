import React, { useState } from 'react';

function ClubGirlStory() {
  const [step, setStep] = useState(0);

  const storySteps = [
    {
      text: ``,
      choices: [
        { text: 'Go inside', next: 1 },
        { text: 'Call your friend instead', next: 2 },
      ],
    },
    {
      text: `The bouncer doesn’t even look at your fake ID — he just stares. Inside, the music is like static in your brain. People dance, but they don’t blink.`,
      choices: [
        { text: 'Head to the bar', next: 3 },
        { text: 'Go to the dance floor', next: 4 },
      ],
    },
    {
      text: `Your friend doesn’t answer. The call rings… but then a voice whispers, “You shouldn’t have come.”`,
      choices: [
        { text: 'Go inside anyway', next: 1 },
        { text: 'Run home', next: 5 },
      ],
    },
    {
      text: `You order something cheap, but the bartender pours you something glowing and purple. “On the house,” he says.`,
      choices: [
        { text: 'Drink it', next: 6 },
        { text: 'Refuse politely', next: 7 },
      ],
    },
    {
      text: `You lose yourself in the crowd. Lights swirl. A woman with no eyes grabs your hand and smiles. “You’re almost ready,” she says.`,
      choices: [
        { text: 'Follow her', next: 8 },
        { text: 'Pull away', next: 9 },
      ],
    },
    {
      text: `You run home. You never talk about that night. But sometimes your phone rings at 2:07 AM — and there's only static on the line.`,
      ending: true,
    },
    {
      text: `You black out. When you wake up, you're alone in the VIP room. Your phone is gone. There's a note on the table: “Welcome to the next phase.”`,
      ending: true,
    },
    {
      text: `The bartender nods. “Wise choice,” he says. A door behind the bar opens. It’s glowing. And it’s for you.`,
      ending: true,
    },
    {
      text: `You follow her down a hallway lined with mirrors. None of the reflections are yours.`,
      ending: true,
    },
    {
      text: `You pull away and find the exit — but the outside world looks… wrong. As if it’s been redrawn in MS Paint by something with claws.`,
      ending: true,
    },
  ];

  const current = storySteps[step];

  return (
    <div className="story">
      <h2>CLUB GIRL: NIGHT OF THE GLITCH</h2>
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
  );
}

export default ClubGirlStory;
