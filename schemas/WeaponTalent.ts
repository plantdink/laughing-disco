import { text, select, checkbox, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const WeaponTalent = list({
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
      initialColumns: ["name", "type"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 50,
    },
  },
  fields: {
    name: text({ label: "Name of Talent", isRequired: true }),
    type: select({
      label: "Talent Type",
      options: [
        { label: "Weapon DPS", value: "Weapon DPS" },
        { label: "Weapon Utility", value: "Weapon Utility" },
        { label: "Weapon / Skill DPS", value: "Hybrid" },
        { label: "Skill DPS", value: "Skill DPS" },
        { label: "Status", value: "Status" },
        { label: "Tank & Bruiser", value: "Tank & Bruiser" },
        { label: "Heal & Support", value: "Heal & Support" },
      ],
      isRequired: true,
    }),
    descriptionPVE: text({
      label: "Description (PVE)",
      ui: {
        displayMode: "textarea",
      },
    }),
    descriptionPVP: text({
      label: "Description (PVP)",
      ui: {
        displayMode: "textarea",
      },
    }),
    classARTalent: checkbox({
      label: "Assault Rifle talent?",
    }),
    classLMGTalent: checkbox({
      label: "Light Machine Gun talent?",
    }),
    classMMRTalent: checkbox({
      label: "Marksman Rifle talent?",
    }),
    classPistolTalent: checkbox({
      label: "Pistol talent?",
    }),
    classRifleTalent: checkbox({
      label: "Rifle talent?",
    }),
    classShotgunTalent: checkbox({
      label: "Shotgun talent?",
    }),
    classSMGTalent: checkbox({
      label: "Sub Machine Gun talent?",
    }),
    isNamed: select({
      label: "Is this a Perfect Talent?",
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
      label: "Is this an Exotic Talent?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    weaponName: relationship({
      label: "Named or Exotic Weapon",
      ref: "Weapon.weaponTalent",
      many: true,
    }),
    averageWeapon: relationship({
      label: "Average Weapon",
      ref: "AverageWeapon.weaponTalent",
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
    image: relationship({
      label: "Talent Image",
      ref: "FieldManualImage.weaponTalent",
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
  },
});
