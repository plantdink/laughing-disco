import { text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const Gearset = list({
  access: {
    create: permissions.canEditItems,
    read: () => true,
    update: permissions.canEditItems,
    delete: permissions.canEditItems,
  },
  ui: {
    hideCreate: (args) => !permissions.canEditItems(args),
    hideDelete: (args) => !permissions.canEditItems(args),
    isHidden: (args) => !permissions.canEditItems(args),
    labelField: "name",
    listView: {
      initialColumns: ["name"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 50,
    },
  },
  fields: {
    name: select({
      label: "Gearset name",
      options: [
        { label: "Aces and Eights", value: "Aces and Eights" },
        { label: "Eclipse Protocol", value: "Eclipse Protocol" },
        { label: "Foundry Bulwark", value: "Foundry Bulwark" },
        { label: "Future Initiative", value: "Future Initiative" },
        { label: "Hard Wired", value: "Hard Wired" },
        { label: "Heartbreaker", value: "Heartbreaker" },
        { label: "Hunters Fury", value: "Hunters Fury" },
        { label: "Negotiators Dilemma", value: "Negotiators Dilemma" },
        { label: "Ongoing Directive", value: "Ongoing Directive" },
        { label: "Rigger", value: "Rigger" },
        { label: "Strikers Battlegear", value: "Strikers Battlegear" },
        { label: "System Corruption", value: "System Corruption" },
        { label: "Tip of the Spear", value: "Tip of the Spear" },
        { label: "True Patriot", value: "True Patriot" },
      ],
    }),
    coreAttribute: select({
      label: "Gearset Core Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Weapon Damage / Armour", value: "Weapon Damage / Armour" },
        { label: "Armour", value: "Armour" },
        { label: "Armour / Utility", value: "Armour / Utility" },
        { label: "Utility", value: "Utility" },
      ],
    }),
    coreAttributeValueLevel40: select({
      label: "Core Attribute Max Value (Level 40)",
      options: [
        { label: "15% Weapon Damage", value: "15% Weapon Damage" },
        {
          label: "15% Weapon Damage / 170,000 Armour",
          value: "15% Weapon Damage / 170,000 Armour",
        },
        { label: "170,000 Armour", value: "170,000 Armour" },
        {
          label: "170,000 Armour / +1 Skill Tier",
          value: "170,000 Armour / 1 Skill Tier",
        },
        {
          label: "+1 Skill Tier",
          value: "1 Skill Tier",
        },
      ],
      isRequired: true,
    }),
    coreAttributeValueWT5: select({
      label: "Core Attribute Max Value (World Tier 5)",
      options: [
        { label: "9.9% Weapon Damage", value: "9.9% Weapon Damage" },
        {
          label: "9.9% Weapon Damage / 42,458 Armour",
          value: "9.9% Weapon Damage / 42,458 Armour",
        },
        { label: "42,458 Armour", value: "42,458 Armour" },
        {
          label: "42,458 Armour / +1 Skill Tier",
          value: "42,458 Armour / 1 Skill Tier",
        },
        {
          label: "+1 Skill Tier",
          value: "1 Skill Tier",
        },
      ],
      isRequired: true,
    }),
    setBonusOne: text({ label: "Set Bonus (2 pieces)" }),
    setBonusTwo: text({ label: "Set Bonus (3 pieces)" }),
    setBonusName: text({ label: "Set Bonus Name (4 pieces)" }),
    setBonusThree: text({
      label: "Set Bonus details (4 pieces)",
      ui: {
        displayMode: "textarea",
      },
    }),
    setChestTalentName: text({ label: "Name of Set Chest Talent" }),
    setChestTalent: text({
      label: "Details of Set Chest Talent",
      ui: {
        displayMode: "textarea",
      },
    }),
    setBackpackTalentName: text({ label: "Name of Set Backpack Talent" }),
    setBackpackTalent: text({
      label: "Details of Set Backpack talent",
      ui: {
        displayMode: "textarea",
      },
    }),
    availableWT5: select({
      label: "Is this available in World Tier 5?",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      defaultValue: "Yes",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    image: relationship({
      label: "Gear Set Image",
      ref: "FieldManualImage.gearset",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
    notes: text({
      label: "Notes",
      ui: {
        displayMode: "textarea",
      },
    }),
    flavourText: text({
      label: "Flavour Text - visible under item name",
      ui: {
        displayMode: "textarea",
      },
    }),
  },
});
