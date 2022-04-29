import { integer, relationship, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const AverageWeapon = list({
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
    labelField: "class",
    listView: {
      initialColumns: ["class"],
      initialSort: {
        field: "class",
        direction: "ASC",
      },
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
    modSlots: integer({ label: "No of Mod Slots", isRequired: true }),
    rpm: integer({ label: "Rounds Per Minute (RPM)", isRequired: true }),
    magazineSize: integer({ label: "Base Mag Size", isRequired: true }),
    headshotMultiplier: integer({
      label: "Headshot Multiplier",
      isRequired: true,
    }),
    classBonusType: select({
      label: "Class Bonus Type",
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
    maxClassBonusValue: integer({
      label: "Bonus Type Percent",
      defaultValue: 0,
      isRequired: true,
    }),
    accuracy: integer({
      label: "Accuracy",
      defaultValue: 0,
      isRequired: true,
    }),
    stability: integer({
      label: "Stability",
      defaultValue: 0,
      isRequired: true,
    }),
    optimalRange: integer({
      label: "Optimal Range (m)",
      defaultValue: 0,
      isRequired: true,
    }),
    maxRange: integer({
      label: "Maximum Range (m)",
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
    damageLevel40: integer({
      label: "Level 40 Average Damage",
      isRequired: true,
    }),
    damageWT5: integer({
      label: "World Tier 5 Average Damage",
      isRequired: true,
    }),
    weaponClass: relationship({
      label: "Weapons",
      ref: "Weapon.averageWeapon",
      many: true,
    }),
    weaponTalent: relationship({
      label: "Related Talents",
      ref: "WeaponTalent.averageWeapon",
      many: true,
    }),
    weaponThirdAttribute: relationship({
      label: "Class Third Attributes",
      ref: "WeaponThirdAttribute.averageWeapon",
      many: true,
    }),
    image: relationship({
      label: "Weapon Image",
      ref: "FieldManualImage.averageWeapon",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
  },
});
