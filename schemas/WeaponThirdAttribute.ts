import {
  text,
  select,
  checkbox,
  integer,
  relationship,
} from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const WeaponThirdAttribute = list({
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
    labelField: "attribute",
    listView: {
      initialColumns: ["attribute"],
      initialSort: {
        field: "attribute",
        direction: "ASC",
      },
      pageSize: 50,
    },
  },
  fields: {
    attribute: select({
      label: "Attribute Name",
      options: [
        { label: "Accuracy", value: "Accuracy" },
        { label: "Critical Hit Chance", value: "Critical Hit Chance" },
        { label: "Critical Hit Damage", value: "Critical Hit Damage" },
        { label: "Damage to Armour", value: "Damage to Armour" },
        { label: "Damage to Health", value: "Damage to Health" },
        {
          label: "Damage to Targets out of Cover",
          value: "Damage to Targets out of Cover",
        },
        { label: "Headshot Damage", value: "Headshot Damage" },
        { label: "Magazine Size", value: "Magazine Size" },
        { label: "Optimal Range", value: "Optimal Range" },
        { label: "Rate of Fire", value: "Rate of Fire" },
        { label: "Reload Speed", value: "Reload Speed" },
        { label: "Stability", value: "Stability" },
        { label: "Swap Speed", value: "Swap Speed" },
      ],
      isRequired: true,
    }),
    valueLevel40: integer({
      label:
        "Level 40 Max Value (Enter round numbers out of 1000 eg 9.5% = 95)",
      isRequired: true,
    }),
    valueWT5: integer({
      label:
        "World Tier 5 Max Value (Enter round numbers out of 1000 eg 9.5% = 95)",
      isRequired: true,
    }),
    classARAttribute: checkbox({
      label: "Assault Rifle attribute?",
    }),
    classLMGAttribute: checkbox({
      label: "Light Machine Gun attribute?",
    }),
    classMMRAttribute: checkbox({
      label: "Marksman Rifle attribute?",
    }),
    classPistolAttribute: checkbox({
      label: "Pistol attribute?",
    }),
    classRifleAttribute: checkbox({
      label: "Rifle attribute?",
    }),
    classShotgunAttribute: checkbox({
      label: "Shotgun attribute?",
    }),
    classSMGAttribute: checkbox({
      label: "Sub Machine Gun attribute?",
    }),
    averageWeapon: relationship({
      label: "Average Weapon",
      ref: "AverageWeapon.weaponThirdAttribute",
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
