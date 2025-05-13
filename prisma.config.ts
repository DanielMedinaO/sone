import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

import type { PrismaConfig } from 'prisma';

export default {
  earlyAccess: true,
  schema: path.join('prisma'),
} satisfies PrismaConfig;
