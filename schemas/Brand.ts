import { text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const Brand = list({
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
      pageSize: 50,
    },
  },
  fields: {
    name: select({
      label: "Brand Name",
      options: [
        { label: "5.11 Tactical", value: "5.11 Tactical" },
        { label: "Airaldi Holdings", value: "Airaldi Holdings" },
        { label: "Alps Summit Armaments", value: "Alps Summit Armaments" },
        { label: "Badger Tuff", value: "Badger Tuff" },
        { label: "Belstone Armory", value: "Belstone Armory" },
        { label: "Ceska Vyroba s.r.o.", value: "Ceska Vyroba s.r.o" },
        {
          label: "China Light Industries Corporation",
          value: "China Light Industries Corporation",
        },
        { label: "Douglas & Harding", value: "Douglas & Harding" },
        { label: "Empress International", value: "Empress International" },
        { label: "Fenris Group AB", value: "Fenris Group AB" },
        { label: "Gila Guard", value: "Gila Guard" },
        { label: "Golan Gear Ltd", value: "Golan Gear Ltd" },
        { label: "Grupo Sombra S.A.", value: "Grupo Sombra S.A" },
        { label: "Hana-U Corporation", value: "Hana-U Corporation" },
        { label: "Murakami Industries", value: "Murakami Industries" },
        { label: "Overlord Armaments", value: "Overlord Armaments" },
        { label: "Petrov Defense Group", value: "Petrov Defense Group" },
        { label: "Providence Defense", value: "Providence Defense" },
        { label: "Richter & Kaiser GmbH", value: "Richter & Kaiser GmbH" },
        { label: "Sokolov Concern", value: "Sokolov Concern" },
        { label: "Uzina Getica", value: "Uzina Getica" },
        { label: "Walker, Harris & Co", value: "Walker, Harris & Co." },
        { label: "Wyvern Wear", value: "Wyvern Wear" },
        { label: "Yaahl Gear", value: "Yaahl Gear" },
        { label: "Improvised", value: "Improvised" },
        { label: "All Brands", value: "All Brands" },
      ],
    }),
    coreAttribute: select({
      label: "Brand Core Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "Utility", value: "Utility" },
        { label: "Weapon Damage / Armour", value: "Weapon Damage / Armour" },
        {
          label: "Weapon Damage / Armour / Utility",
          value: "Weapon Damage / Armour / Utility",
        },
      ],
    }),
    coreAttributeValueLevel40: select({
      label: "Core Attribute Max Value (Level 40)",
      options: [
        { label: "15% Weapon Damage", value: "15% Weapon Damage" },
        { label: "170,000 Armour", value: "170,000 Armour" },
        {
          label: "+1 Skill Tier",
          value: "+1 Skill Tier",
        },
        {
          label: "15% Weapon Damage / 170,000 Armour",
          value: "15% Weapon Damage / 170,000 Armour",
        },
        {
          label: "15% Weapon Damage / 170,000 Armour / + 1 Skill Tier",
          value: "15% Weapon Damage / 170,000 Armour / + 1 Skill Tier",
        },
      ],
      isRequired: true,
    }),
    coreAttributeValueWT5: select({
      label: "Core Attribute Max Value (World Tier 5)",
      options: [
        { label: "9.9% Weapon Damage", value: "9.9% Weapon Damage" },
        { label: "42,458 Armour", value: "42,458 Armour" },
        {
          label: "+1 Skill Tier",
          value: "+1 Skill Tier",
        },
        {
          label: "9.9% Weapon Damage / 42,458 Armour / + 1 Skill Tier",
          value: "9.9% Weapon Damage / 42,458 Armour / + 1 Skill Tier",
        },
      ],
      isRequired: true,
    }),
    setBonusOne: text({ label: "First Set Bonus (Level 40)" }),
    setBonusTwo: text({ label: "Second Set Bonus (Level 40)" }),
    setBonusThree: text({ label: "Third Set Bonus (Level 40)" }),
    armourTalent: relationship({
      label: "Unique Brand Talents",
      ref: "ArmourTalent.brand",
      many: true,
      ui: {
        hideCreate: true,
      },
    }),
    armourType: relationship({
      label: "Named Armour Piece",
      ref: "ArmourType.brand",
      many: true,
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
    image: relationship({
      label: "Brand Image",
      ref: "FieldManualImage.brand",
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
