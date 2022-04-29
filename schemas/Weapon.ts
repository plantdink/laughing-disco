import { integer, text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const Weapon = list({
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
    labelField: "model",
    listView: {
      initialColumns: ["class", "model", "family"],
      initialSort: {
        field: "class",
        direction: "ASC",
      },
      pageSize: 100,
    },
  },
  fields: {
    class: select({
      label: "Weapon Class",
      options: [
        { label: "Assault Rifle", value: "ASSAULT RIFLE" },
        { label: "Light Machine Gun", value: "LIGHT MACHINE GUN" },
        { label: "Marksman Rifle", value: "MARKSMAN RIFLE" },
        { label: "Pistol", value: "PISTOL" },
        { label: "Rifle", value: "RIFLE" },
        { label: "Shotgun", value: "SHOTGUN" },
        { label: "Sub Machine Gun", value: "SUB MACHINE GUN" },
      ],
      isRequired: true,
    }),
    family: text({ label: "Weapon Family", isRequired: true }),
    model: text({ label: "Model (Weapon Name)", isRequired: true }),
    modSlots: integer({ label: "No of Mod Slots", isRequired: true }),
    magazineSize: integer({ label: "Magazine Size", isRequired: true }),
    rpm: integer({ label: "Rounds Per Minute (RPM)", isRequired: true }),
    accuracy: integer({
      label: "Accuracy (0 if unknown)",
      defaultValue: 0,
      isRequired: true,
    }),
    stability: integer({
      label: "Stability (0 if unknown)",
      defaultValue: 0,
      isRequired: true,
    }),
    optimalRange: integer({
      label: "Optimal Range (m - 0 if unknown)",
      defaultValue: 0,
      isRequired: true,
    }),
    maxRange: integer({
      label: "Maximum Range (m - 0 if unknown)",
      defaultValue: 0,
      isRequired: true,
    }),
    reloadSpeed: integer({
      label: "Reload Speed (milliseconds)",
      isRequired: true,
    }),
    reloadSpeedFromEmpty: integer({
      label: "Reload Speed From Empty (milliseconds)",
      isRequired: true,
    }),
    headshotMultiplier: integer({
      label: "Headshot Multiplier (whole number eg 1.55 = 155) ",
      isRequired: true,
    }),
    weaponBonusType: select({
      label: "Weapon Class Bonus One",
      options: [
        { label: "Critical Hit Chance", value: "CHC" },
        { label: "Critical Hit Damage", value: "CHD" },
        { label: "Damage to Armour", value: "DTA" },
        { label: "Damage to Health", value: "DTH" },
        { label: "Headshot Damage", value: "HSD" },
        { label: "Damage to Targets out of Cover", value: "OOC" },
        { label: "-----", value: "NA" },
      ],
      isRequired: true,
    }),
    maxBonusValue: integer({
      label: "Bonus One Percent",
      defaultValue: 0,
      isRequired: true,
    }),
    weaponBonusTypeTwo: select({
      label: "Weapon Bonus Two",
      options: [
        { label: "Critical Hit Chance", value: "CHC" },
        { label: "Critical Hit Damage", value: "CHD" },
        { label: "Damage to Armour", value: "DTA" },
        { label: "Damage to Health", value: "DTH" },
        { label: "Headshot Damage", value: "HSD" },
        { label: "Damage to Targets out of Cover", value: "OOC" },
        { label: "Magazine Size", value: "Magazine Size" },
        { label: "-----", value: "NA" },
      ],
    }),
    maxBonusTwoValue: integer({
      label: "Bonus Two Percent (Whole number 9.5% = 95)",
      defaultValue: 0,
    }),
    damageLevel40: integer({ label: "Level 40 Base Damage", isRequired: true }),
    damageWt5: integer({
      label: "World Tier 5 Base Damage",
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
    isNamed: select({
      label: "Is this a Named Weapon?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    isExotic: select({
      label: "Is this an Exotic Weapon?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    weaponTalent: relationship({
      label: "Related Talents",
      ref: "WeaponTalent.weaponName",
      many: true,
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
    exoticWeaponAttachment: relationship({
      label: "Exotic Weapon Attachment",
      ref: "ExoticWeaponAttachment.weapon",
      many: true,
    }),
    averageWeapon: relationship({
      label: "Average Weapon",
      ref: "AverageWeapon.weaponClass",
    }),
    image: relationship({
      label: "Weapon Image",
      ref: "FieldManualImage.weapon",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
  },
});
