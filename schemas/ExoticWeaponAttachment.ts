import { text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const ExoticWeaponAttachment = list({
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
      initialColumns: ["name"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 100,
    },
  },
  fields: {
    name: text({ label: "Name", isRequired: true }),
    attachmentSlot: select({
      label: "Attachment Slot",
      options: [
        { label: "Optics", value: "Optics" },
        { label: "Magazine", value: "Magazine" },
        { label: "Muzzle", value: "Muzzle" },
        { label: "Snake", value: "Snake" },
        { label: "Under-barrel", value: "Under-barrel" },
      ],
    }),
    opticsSlotBonusType: select({
      label: "Optics Attachment Bonus Type",
      options: [
        { label: "Accuracy", value: "Accuracy" },
        { label: "Critical Hit Chance", value: "Critical Hit Chance" },
        { label: "Headshot Damage", value: "Headshot Damage" },
        { label: "Reload Speed", value: "Reload Speed" },
      ],
    }),
    opticsBonusValueLevel40: select({
      label: "Optics - Level 40 Max Value",
      options: [
        { label: "10% Accuracy", value: "10% Accuracy" },
        { label: "15% Accuracy", value: "15% Accuracy" },
        {
          label: "5% Critical Hit Chance",
          value: "5% Critical Hit Chance",
        },
        {
          label: "10% Critical Hit Chance",
          value: "10% Critical Hit Chance",
        },
        {
          label: "15% Critical Hit Chance",
          value: "15% Critical Hit Chance",
        },
        { label: "5% Headshot Damage", value: "5% Headshot Damage" },
        { label: "30% Headshot Damage", value: "30% Headshot Damage" },
        { label: "40% Headshot Damage", value: "40% Headshot Damage" },
        { label: "45% Headshot Damage", value: "45% Headshot Damage" },
        { label: "10% Reload Speed", value: "10% Reload Speed" },
      ],
    }),
    opticsValueWT5: select({
      label: "Optics - World Tier 5 Max Value",
      options: [
        { label: "10% Accuracy", value: "10% Accuracy" },
        { label: "15% Accuracy", value: "15% Accuracy" },
        {
          label: "5% Critical Hit Chance",
          value: "5% Critical Hit Chance",
        },
        {
          label: "10% Critical Hit Chance",
          value: "10% Critical Hit Chance",
        },
        {
          label: "15% Critical Hit Chance",
          value: "15% Critical Hit Chance",
        },
        { label: "5% Headshot Damage", value: "5% Headshot Damage" },
        { label: "30% Headshot Damage", value: "30% Headshot Damage" },
        { label: "40% Headshot Damage", value: "40% Headshot Damage" },
        { label: "45% Headshot Damage", value: "45% Headshot Damage" },
        { label: "10% Reload Speed", value: "10% Reload Speed" },
      ],
    }),
    magazineSlotBonusType: select({
      label: "Magazine Slot Bonus Type",
      options: [
        { label: "Extra Rounds", value: "Extra Rounds" },
        { label: "Rate of Fire", value: "Rate of Fire" },
        { label: "Reload Speed", value: "Reload Speed" },
        { label: "Weapon Handling", value: "Weapon Handling" },
      ],
    }),
    magazineValueLevel40: select({
      label: "Magazine - Level 40 Max Value",
      options: [
        { label: "+ 10 Rounds", value: "+ 10 Rounds" },
        { label: "+ 11 Rounds", value: "+ 11 Rounds" },
        { label: "+ 20 Rounds", value: "+ 20 Rounds" },
        { label: "+ 30 Rounds", value: "+ 30 Rounds" },
        {
          label: "10% Rate of Fire",
          value: "10% Rate of Fire",
        },
        { label: "10% Reload Speed", value: "10% Reload Speed" },
        { label: "15% Reload Speed", value: "15% Reload Speed" },
        { label: "15% Weapon Handling", value: "15% Weapon Handling" },
      ],
    }),
    magazineValueWT5: select({
      label: "Magazine - World Tier 5 Max Value",
      options: [
        { label: "+ 10 Rounds", value: "+ 10 Rounds" },
        { label: "+ 11 Rounds", value: "+ 11 Rounds" },
        { label: "+ 20 Rounds", value: "+ 20 Rounds" },
        { label: "+ 30 Rounds", value: "+ 30 Rounds" },
        {
          label: "10% Rate of Fire",
          value: "10% Rate of Fire",
        },
        { label: "10% Reload Speed", value: "10% Reload Speed" },
        { label: "15% Reload Speed", value: "15% Reload Speed" },
        { label: "15% Weapon Handling", value: "15% Weapon Handling" },
      ],
    }),
    muzzleSlotBonusType: select({
      label: "Muzzle Attachment Bonus Type",
      options: [
        { label: "Accuracy", value: "Accuracy" },
        { label: "Critical Hit Chance", value: "Critical Hit Chance" },
        { label: "Critical Hit Damage", value: "Critical Hit Damage" },
        { label: "Stability", value: "Stability" },
        { label: "Rate of Fire", value: "Rate of Fire" },
      ],
    }),
    muzzleValueLevel40: select({
      label: "Muzzle - Level 40 Max Value",
      options: [
        { label: "10% Accuracy", value: "10% Accuracy" },
        { label: "20% Accuracy", value: "20% Accuracy" },
        {
          label: "5% Critical Hit Chance",
          value: "5% Critical Hit Chance",
        },
        {
          label: "10% Critical Hit Chance",
          value: "10% Critical Hit Chance",
        },
        {
          label: "5% Critical Hit Damage",
          value: "5% Critical Hit Damage",
        },
        {
          label: "15% Critical Hit Damage",
          value: "15% Critical Hit Damage",
        },
        {
          label: "30% Critical Hit Damage",
          value: "30% Critical Hit Damage",
        },
        { label: "10% Stability", value: "10% Stability" },
        { label: "10% Rate of Fire", value: "10% Rate of Fire" },
      ],
    }),
    muzzleValueWT5: select({
      label: "Muzzle - World Tier 5 Max Value",
      options: [
        { label: "10% Accuracy", value: "10% Accuracy" },
        { label: "20% Accuracy", value: "20% Accuracy" },
        {
          label: "5% Critical Hit Chance",
          value: "5% Critical Hit Chance",
        },
        {
          label: "10% Critical Hit Chance",
          value: "10% Critical Hit Chance",
        },
        {
          label: "5% Critical Hit Damage",
          value: "5% Critical Hit Damage",
        },
        {
          label: "15% Critical Hit Damage",
          value: "15% Critical Hit Damage",
        },
        {
          label: "30% Critical Hit Damage",
          value: "30% Critical Hit Damage",
        },
        { label: "10% Stability", value: "10% Stability" },
      ],
    }),
    underbarrelSlotBonusType: select({
      label: "Under-barrel Attachment Bonus Type",
      options: [
        { label: "Melee Damage", value: "Melee Damage" },
        { label: "Optimal Range", value: "Optimal Range" },
        { label: "Rate of Fire", value: "Rate of Fire" },
        { label: "Stability", value: "Stability" },
        { label: "Weapon Handling", value: "Weapon Handling" },
      ],
    }),
    underbarrelValueLevel40: select({
      label: "Under-barrel Level 40 Max Value",
      options: [
        { label: "500% Melee Damage", value: "500% Melee Damage" },
        {
          label: "25% Optimal Range",
          value: "25% Optimal Range",
        },
        { label: "15% Rate of Fire", value: "15% Rate of Fire" },
        { label: "10% Stability", value: "10% Stability" },
        { label: "5% Weapon Handling", value: "5% Weapon Handling" },
        { label: "10% Weapon Handling", value: "10% Weapon Handling" },
      ],
    }),
    underbarrelValueWT5: select({
      label: "Under-barrel World Tier 5 Max Value",
      options: [
        { label: "500% Melee Damage", value: "500% Melee Damage" },
        {
          label: "25% Optimal Range",
          value: "25% Optimal Range",
        },
        { label: "15% Rate of Fire", value: "15% Rate of Fire" },
        { label: "10% Stability", value: "10% Stability" },
        { label: "5% Weapon Handling", value: "5% Weapon Handling" },
        { label: "10% Weapon Handling", value: "10% Weapon Handling" },
      ],
    }),
    weapon: relationship({
      label: "Exotic Weapon",
      ref: "Weapon.exoticWeaponAttachment",
      many: true,
    }),
    notes: text({
      label: "Notes",
      ui: {
        displayMode: "textarea",
      },
    }),
  },
});
