import { time, pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const poll =  pgTable("poll", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name").notNull(),
  dates: text("dates").notNull(),
  timeFrom: time("time_from").notNull(),
  timeTo: time("time_to").notNull(),
  timeZone: text("time_zone").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})