import { integer, text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const ArmourType = list({
  access: {
    create: permissions.canEditItems,
    read: () => true,
    update: permissions.canEditItems,
    delete: permissions.canEditItems,
  },
  ui: {
    hideCreate: (args) => !permissions.canEditItems(args),
    hideDelete: (args) => !permissions.canEditItems(args),
    isHidden: (args) => !permissions.canViewAdminSite(args),
    labelField: "name",
    listView: {
      initialColumns: ["name", "piece", "isNamed"],
      initialSort: {
        field: "piece",
        direction: "ASC",
      },
      pageSize: 50,
    },
  },
  fields: {
    piece: select({
      label: "Armour Type",
      options: [
        { label: "Mask", value: "Mask" },
        { label: "Chest", value: "Chest" },
        { label: "Holster", value: "Holster" },
        { label: "Backpack", value: "Backpack" },
        { label: "Gloves", value: "Gloves" },
        { label: "Kneepads", value: "Kneepads" },
      ],
      isRequired: true,
    }),
    coreAttributeTypeOne: text({
      label: "Core Attribute Type (Default - Weapon damage)",
      defaultValue: "Weapon Damage",
    }),
    coreAttributeTypeTwo: text({
      label: "Core Attribute Type (Default - Armour)",
      defaultValue: "Armour",
    }),
    coreAttributeTypeThree: text({
      label: "Core Attribute Type (Default - Skill Tier)",
      defaultValue: "Skill Tier",
    }),
    maxCoreDamageLevel40: integer({
      label: "Weapon Damage (Level 40)",
      defaultValue: 150,
    }),
    maxCoreArmourLevel40: integer({
      label: "Armour (Level 40)",
      defaultValue: 170000,
    }),
    maxCoreSkillTierLevel40: integer({
      label: "Skill Tier (Level 40)",
      defaultValue: 1,
    }),
    isNamed: select({
      label: "Is this a Named Item?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    name: text({ label: "Enter item name (Use Generic if not a Named Item)" }),
    uniqueAttribute: text({ label: "Named Item Unique Attribute" }),
    armourTalent: relationship({
      label: "Name of Talents piece can have",
      ref: "ArmourTalent.armourType",
      many: true,
    }),
    brand: relationship({
      label: "Brand of Named Item",
      ref: "Brand.armourType",
      many: true,
    }),
    perfectArmourTalent: relationship({
      label: "Perfect Talent",
      ref: "ArmourTalent.namedArmourPiece",
      ui: {
        hideCreate: true,
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
    offensiveAttributeOneLevel40: text({
      label: "Offensive Attribute Type - Critical Hit Chance",
      defaultValue: "Critical Hit Chance",
    }),
    offensiveAttributeOneMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 60,
    }),
    offensiveAttributeTwoLevel40: text({
      label: "Offensive Attribute Type - Critical Hit Damage",
      defaultValue: "Critical Hit Damage",
    }),
    offensiveAttributeTwoMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 120,
    }),
    offensiveAttributeThreeLevel40: text({
      label: "Offensive Attribute Type - Headshot Damage",
      defaultValue: "Headshot Damage",
    }),
    offensiveAttributeThreeMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 100,
    }),
    offensiveAttributeFourLevel40: text({
      label: "Offensive Attribute Type - Weapon Handling",
      defaultValue: "Weapon Handling",
    }),
    offensiveAttributeFourMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 80,
    }),
    defensiveAttributeOneLevel40: text({
      label: "Defensive Attribute Type - Armour Regeneration",
      defaultValue: "Armour Regeneration",
    }),
    defensiveAttributeOneMaxValueLevel40: integer({
      label: "Max Amount (Level 40)",
      defaultValue: 4925,
    }),
    defensiveAttributeTwoLevel40: text({
      label: "Defensive Attribute Type - Explosive Resistance",
      defaultValue: "Explosive Resistance",
    }),
    defensiveAttributeTwoMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 100,
    }),
    defensiveAttributeThreeLevel40: text({
      label: "Defensive Attribute Type - Hazard Protection",
      defaultValue: "Hazard Protection",
    }),
    defensiveAttributeThreeMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 100,
    }),
    defensiveAttributeFourLevel40: text({
      label: "Defensive Attribute Type - Health",
      defaultValue: "Health",
    }),
    defensiveAttributeFourMaxValueLevel40: integer({
      label: "Max Amount (Level 40)",
      defaultValue: 18935,
    }),
    utilityAttributeOneLevel40: text({
      label: "Utility Attribute Type - Skill Damage",
      defaultValue: "Skill Damage",
    }),
    utilityAttributeOneMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 100,
    }),
    utilityAttributeTwoLevel40: text({
      label: "Utility Attribute Type - Skill Haste",
      defaultValue: "Skill Haste",
    }),
    utilityAttributeTwoMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 120,
    }),
    utilityAttributeThreeLevel40: text({
      label: "Utility Attribute Type - Skill Repair",
      defaultValue: "Skill Repair",
    }),
    utilityAttributeThreeMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 200,
    }),
    utilityAttributeFourLevel40: text({
      label: "Utility Attribute Type - Status Effects",
      defaultValue: "Status Effects",
    }),
    utilityAttributeFourMaxValueLevel40: integer({
      label: "Max % Amount (Level 40)",
      defaultValue: 100,
    }),
    // ------------- World Tier 5 from here down ----------------------
    maxCoreValueDamageLevel30: integer({
      label: "Weapon Damage (World Tier 5)",
      defaultValue: 99,
    }),
    maxCoreArmourLevel30: integer({
      label: "Armour (World Tier 5)",
      defaultValue: 42458,
    }),
    maxCoreSkillTierLevel30: integer({
      label: "Skill Tier (World Tier 5)",
      defaultValue: 1,
    }),
    offensiveAttributeOneLevel30: text({
      label: "Offensive Attribute Type - Critical Hit Chance (World Tier 5)",
      defaultValue: "Critical Hit Chance",
    }),
    offensiveAttributeOneMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 51,
    }),
    offensiveAttributeTwoLevel30: text({
      label: "Offensive Attribute Type - Critical Hit Damage (World Tier 5)",
      defaultValue: "Critical Hit Damage",
    }),
    offensiveAttributeTwoMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 79,
    }),
    offensiveAttributeThreeLevel30: text({
      label: "Offensive Attribute Type - Headshot Damage (World Tier 5)",
      defaultValue: "Headshot Damage",
    }),
    offensiveAttributeThreeMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 69,
    }),
    offensiveAttributeFourLevel30: text({
      label: "Offensive Attribute Type - Weapon Handling (World Tier 5)",
      defaultValue: "Weapon Handling",
    }),
    offensiveAttributeFourMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 70,
    }),
    defensiveAttributeOneLevel30: text({
      label: "Defensive Attribute Type - Armour Regeneration (World Tier 5)",
      defaultValue: "Armour Regeneration",
    }),
    defensiveAttributeOneMaxValueLevel30: integer({
      label: "Max Amount (World Tier 5)",
      defaultValue: 1223,
    }),
    defensiveAttributeTwoLevel30: text({
      label: "Defensive Attribute Type - Explosive Resistance (World Tier 5)",
      defaultValue: "Explosive Resistance",
    }),
    defensiveAttributeTwoMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 66,
    }),
    defensiveAttributeThreeLevel30: text({
      label: "Defensive Attribute Type - Hazard Protection (World Tier 5)",
      defaultValue: "Hazard Protection",
    }),
    defensiveAttributeThreeMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 66,
    }),
    defensiveAttributeFourLevel30: text({
      label: "Defensive Attribute Type - Health (World Tier 5)",
      defaultValue: "Health",
    }),
    defensiveAttributeFourMaxValueLevel30: integer({
      label: "Max Amount - (World Tier 5)",
      defaultValue: 4695,
    }),
    utilityAttributeOneLevel30: text({
      label: "Utility Attribute Type - Skill Damage (World Tier 5)",
      defaultValue: "Skill Damage",
    }),
    utilityAttributeOneMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 69,
    }),
    utilityAttributeTwoLevel30: text({
      label: "Utility Attribute Type - Skill Haste (World Tier 5)",
      defaultValue: "Skill Haste",
    }),
    utilityAttributeTwoMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 79,
    }),
    utilityAttributeThreeLevel30: text({
      label: "Utility Attribute Type - Skill Repair (World Tier 5)",
      defaultValue: "Skill Repair",
    }),
    utilityAttributeThreeMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 121,
    }),
    utilityAttributeFourLevel30: text({
      label: "Utility Attribute Type - Status Effects (World Tier 5)",
      defaultValue: "Status Effects",
    }),
    utilityAttributeFourMaxValueLevel30: integer({
      label: "Max % Amount (World Tier 5)",
      defaultValue: 66,
    }),
    modSlots: integer({ label: "No of Mod Slots", defaultValue: 0 }),
    image: relationship({
      label: "Armour Piece Image",
      ref: "FieldManualImage.armourType",
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
