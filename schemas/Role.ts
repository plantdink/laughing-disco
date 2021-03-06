import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions, rules } from "../access";
import { permissionFields } from "./fields";

export const Role = list({
  access: {
    create: permissions.canManageRoles,
    read: () => true,
    update: permissions.canManageRoles,
    delete: permissions.canManageRoles,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageRoles(args),
    hideDelete: (args) => !permissions.canManageRoles(args),
    isHidden: (args) => !rules.canManageRoles(args),
    labelField: "name",
    listView: {
      initialColumns: ["name", "assignedTo"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
    },
  },
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    assignedTo: relationship({
      ref: "User.role",
      many: true,
      ui: {
        itemView: { fieldMode: "read" },
      },
    }),
  },
});
