import { checkbox } from "@keystone-next/fields";

export const permissionFields = {
  canApproveAdminAccess: checkbox({
    defaultValue: false,
    label: "User can approve site administrator access",
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can create, read, update and delete roles",
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: "User can query other users",
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can edit other users and assign roles",
  }),
  canEditItems: checkbox({
    defaultValue: false,
    label: "User can edit items",
  }),
  canAccessGraphQLAPI: checkbox({
    defaultValue: false,
    label: "User has external access to GraphQL API & can edit items",
  }),
  canViewAdminSite: checkbox({
    defaultValue: false,
    label: "User can view admin site",
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
