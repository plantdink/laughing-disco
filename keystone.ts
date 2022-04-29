import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { insertSeedData } from "./seed-data";
import { User } from "./schemas/User";
import { Weapon } from "./schemas/Weapon";
import { ArmourType } from "./schemas/ArmourType";
import { ArmourTalent } from "./schemas/ArmourTalent";
import { Brand } from "./schemas/Brand";
import { WeaponTalent } from "./schemas/WeaponTalent";
import { ExoticArmourPiece } from "./schemas/ExoticArmourPiece";
import { Gearset } from "./schemas/Gearset";
import { Role } from "./schemas/Role";
import { FieldManualImage } from "./schemas/fieldManualImage";
import { AverageWeapon } from "./schemas/AverageWeapon";
import { WeaponThirdAttribute } from "./schemas/WeaponThirdAttribute";
import { ExoticWeaponAttachment } from "./schemas/ExoticWeaponAttachment";
import "dotenv/config";
import { sendPasswordResetEmail } from "./lib/mail";
import { permissionsList } from "./schemas/fields";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/div2-item-compare";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 180, // 180 day cookie life
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    // TODO: add initial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // console.log(args);
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect(keystone) {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      // schema goes here
      User,
      Role,
      Weapon,
      ArmourType,
      ExoticArmourPiece,
      Brand,
      Gearset,
      ArmourTalent,
      WeaponTalent,
      FieldManualImage,
      AverageWeapon,
      WeaponThirdAttribute,
      ExoticWeaponAttachment,
    }),
    ui: {
      // TODO: change for roles
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role { ${permissionsList.join(" ")} }`,
    }),
  })
);
