function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const gearsets = [
  {
    name: "Aces and Eights",
    coreAttribute: "Weapon Damage",
    coreAttributeValueLevel40: "15% Weapon damage",
    coreAttributeValueWT5: "9.9% Weapon Damage",
    setBonusOne: "15% Marksman Rifle Damage",
    setBonusTwo: "30% Headshot Damage",
    setBonusThree:
      "Dead Man's Hand. Flip a card when landing shots with a Marksman Rifle. After 5 cards are flipped, the damage of your next shot is amplified by 30%. More shots are enhanced, the better the hand revealed. Four of a Kind: 4 shots. Full House: 3 shots. Aces and Eights: 2 shots. Flip an additional card on headshots.",
    setBackpackTalent:
      "Ace in the Sleeve. Amplifies 1 extra shot when revealing your hand.",
    setChestTalent:
      "No Limit. Increases Dead Man's Hand damage bonus from 30% to 50%.",
  },
  {
    name: "Eclipse Protocol",
    coreAttribute: "Skill Tier",
    coreAttributeValueLevel40: "+1 Skill Tier",
    coreAttributeValueWT5: "+1 Skill Tier",
    setBonusOne: "15% Status Effects",
    setBonusTwo: "15% Skill Haste. 30% Hazard Protection",
    setBonusThree:
      "Contagion. Enemies that die while affected by your status effects spread those status effects to another enemy within 10m and refresh the duration.",
    setBackpackTalent:
      "Symptom Aggravator: Amplifies all damage you deal to status affected targets by 30%",
    setChestTalent: "Proliferation: Increase contagion range from 10m to 15m",
  },
  {
    name: "Foundry Bulwark",
    coreAttribute: "Armour",
    coreAttributeValueLevel40: "170,000 Armour",
    coreAttributeValueWT5: "42,458 Armour",
    setBonusOne: "10% Total Armor",
    setBonusTwo: "1% armor/sec regeneration. 50% Shield health",
    setBonusThree:
      "Makeshift Repairs. Whenever you or your shield take damage, 20% of that amount is repaired to both over 15 seconds.",
    setBackpackTalent:
      "Process Refinery. Increases Makeshift Repairs speed from 15 seconds to 10 seconds.",
    setChestTalent:
      "Improved Materials. Increases Makeshift Repairs from 20% to 30%.",
  },
  {
    name: "Future Initiative",
    coreAttribute: "Skill Tier",
    coreAttributeValueLevel40: "+1 Skill Tier",
    coreAttributeValueWT5: "+1 Skill Tier",
    setBonusOne: "15% Skill Repair",
    setBonusTwo: "15% Skill Duration. 15% Cooldown Reduction",
    setBonusThree:
      "Ground Control. Increases you and your allies' total weapon and skill damage by 15% when at full armor. When you repair an ally, you and all allies within 5 meters of you are also repaired for 60% of that amount.",
    setBackpackTalent:
      "Strategic Combat Support. Increases Ground Control proximity repair from 60% to 120%.",
    setChestTalent: "Increases Ground Control damage bonus from 15% to 25%.",
  },
  {
    name: "Hard Wired",
    coreAttribute: "Skill Tier",
    coreAttributeValueLevel40: "+1 Skill Tier",
    coreAttributeValueWT5: "+1 Skill Tier",
    setBonusOne: "15% Cooldown Reduction",
    setBonusTwo: "15% Skill Damage. 15% Skill Repair",
    setBonusThree:
      "Feedback Loop. Whenever you use or cancel a skill, your other skill's cooldown is automatically reduced by 30 seconds and increases total skill damage and repair by 10% for 20 seconds. This can occur at most once per 20 seconds.",
    setBackpackTalent:
      "Short Circuit. Decreases Feedback Loop cooldown from 20 seconds to 10 seconds.",
    setChestTalent:
      "Positive Reinforcement. Increases Feedback Loop skill damage and repair bonus from 10% to 25%.",
  },
  {
    name: "Hunters Fury",
    coreAttribute: "Weapon Damage",
    coreAttributeValueLevel40: "15% Weapon Damage",
    coreAttributeValueWT5: "",
    setBonusOne: "15% SMG Damage. 15% Shotgun Damage",
    setBonusTwo: "20% Armor on Kill. 100% Health on Kill",
    setBonusThree:
      "Apex Predator. Enemies within 15 meters receive a debuff, amplifying your weapon damage against them by 20%. Killing a debuffed enemy with your weapon disorients other enemies within 5 meters, and amplifies weapon damage by 5% for 10 seconds, stacking up to 5 times.",
    setBackpackTalent:
      "Overwhelming Force: Increases the radius of disorient on Apex Predator kills from 5 meters to 10 meters.",
    setChestTalent:
      "Endless Hunger: Increases the duration of Apex Predator stacks from 10 seconds to 30 seconds.",
  },
  {
    name: "Negotiators Dilemma",
    coreAttribute: "Weapon Damage",
    coreAttributeValueLevel40: "15% Weapon Damage",
    coreAttributeValueWT5: "9.9% Weapon Damage",
    setBonusOne: "15% Critical Hit Chance",
    setBonusTwo: "20% Critical Hit Damage",
    setBonusThree:
      "Crowd Control. Critical hits mark enemies for 20 seconds, up to 3 marks total. When you critically hit a marked enemy, all other marked enemies take 60% of the damage dealt. Whenever a marked enemy dies, gain 2% critical hit damage, stacking up to 20 times, until combat ends.",
    setBackpackTalent:
      "Critical Measures. Increases Crowd Control damage to additional marked enemies from 60% to 100%.",
    setChestTalent:
      "Target Rich Environment. Increases Crowd Control mark count from 3 to 5.",
  },
  {
    name: "Ongoing Directive",
    coreAttribute: "Weapon Damage",
    coreAttributeValueLevel40: "15% Weapon damage",
    coreAttributeValueWT5: "9.9% Weapon Damage",
    setBonusOne: "15% Status Effects",
    setBonusTwo: "20% Reload Speed",
    setBonusThree:
      "Rules of Engagement. Killing a status affected enemy drops Hollow-Point Ammo for your active weapon. Hollow-Point Ammo amplifies weapon damage by 20% and applies Bleed on hit.",
    setBackpackTalent:
      "Trauma Specialist. Increases the duration of your bleed status effects by 50% and all bleed damage done by 100%.",
    setChestTalent:
      "Parabellum Rounds. Increases Hollow-Point Ammo damage to 35%.",
  },
  {
    name: "Rigger",
    coreAttribute: "Skill Tier",
    coreAttributeValueLevel40: "+1 Skill Tier",
    coreAttributeValueWT5: "+1 Skill Tier",
    setBonusOne: "15% Skill Haste",
    setBonusTwo: "15% Skill Duration",
    setBonusThree:
      "Tend and Befriend. Interacting with your deployed skills grants the skill 25% skill damage for 10s. This buff cannot be refreshed. Interactions include: - Using / Deploying the Skill - Changing the skills target - Healing the skill",
    setBackpackTalent:
      "Complete Uptime: Cancelling your skills will reset their cooldown.",
    setChestTalent: "Best Buds: Increase the damage buff from 25% to 50%",
  },
  {
    name: "Strikers Battlegear",
    coreAttribute: "Weapon Damage",
    coreAttributeValueLevel40: "15% Weapon Damage",
    coreAttributeValueWT5: "9.9% Weapon Damage",
    setBonusOne: "15% Weapon Handling",
    setBonusTwo: "15% Rate of Fire",
    setBonusThree:
      "Striker's Gamble. Weapon hits amplify total weapon damage by 0.5%, stacking up to 50 times. 2 stacks are lost each second.",
    setBackpackTalent:
      "Risk Management. Increases total weapon damage gained per stack of Striker's Gamble from 0.5% to 0.65%.",
    setChestTalent:
      "Press the Advantage: Increase max stacks for Striker's Gamble from 50 to 100.",
  },
  {
    name: "System Corruption",
    coreAttribute: "Weapon Damage / Armour",
    coreAttributeValueLevel40: "15% Weapon Damage / 170,000 Armour",
    coreAttributeValueWT5: "",
    setBonusOne: "15% Armor on Kill",
    setBonusTwo: "40% Disrupt Resistance. 40% Pulse Resistance",
    setBonusThree:
      "Hackstep Protocol. Replaces armor kits with an instant, infinite-use ability on a 20 seconds cooldown, that grants 50% bonus armor and hides your nameplate for 5 seconds. Increase total weapon damage by 1% per 5% bonus armor gained, up to 20%.",
    setBackpackTalent:
      "Multithreaded Execution. Increases Hackstep Protocol bonus armour from 50% to 100%.",
    setChestTalent:
      "Compiler Optimization. Decreases Hackstep Protocol cooldown from 20 seconds to 15 seconds.",
  },
  {
    name: "Tip of the Spear",
    coreAttribute: "Weapon Damage",
    coreAttributeValueLevel40: "15% Weapon Damage",
    coreAttributeValueWT5: "9.9% Weapon Damage",
    setBonusOne: "10% Signature Weapon Damage",
    setBonusTwo: "10% Weapon Damage",
    setBonusThree:
      "Aggressive Recon. Dealing damage with a signature weapon increase total weapon damage by 20% for 60 seconds. Automatically generate specialization ammo every 60 seconds.",
    setBackpackTalent:
      "Signature Moves. Increases signature weapon damage by 20%, and doubles the amount of signature weapon ammo generated by Aggressive Recon.",
    setChestTalent:
      "Specialized Destruction. Increases Aggressive Recon weapon damage bonus from 20% to 40%.",
  },
  {
    name: "True Patriot",
    coreAttribute: "Armour",
    coreAttributeValueLevel40: "170,000 Armour",
    coreAttributeValueWT5: "42,458 Armour",
    setBonusOne: "30% Ammo Capacity",
    setBonusTwo: "30% Magazine Size",
    setBonusThree:
      "Red, White, and Blue. Every 2s, enemies you shoot receive a stacking debuff of Red, White and Blue. Red: Amplifies the enemy's damage taken by 8%. White: Shooting the enemy repairs the attacking agents armor by 2% once every second. Blue: Decreases the enemy's damage dealt by 8%. Full Flag: Enemies that die while under the effect of all 3 debuffs create a 5 meter explosion, dealing damage equal to their total health and armor. (Explosion strength reduced on Named enemy deaths)",
    setBackpackTalent:
      "Patriotic Boost. Increases Red / White / Blue debuff strength. Red: 8% to 12%. White: 2% to 3%. Blue: 8% to 12%.",
    setChestTalent:
      "Waving the Flag. Increases Red / White / Blue rotation speed to 1.5 seconds.",
  },
];
