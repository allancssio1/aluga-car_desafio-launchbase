CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "code_person" text UNIQUE,
  "gender" text,
  "order_id" text,
  "addresses_id" text
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text,
  "number" text,
  "district" text,
  "city" text,
  "region" text
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "addresses_id" text UNIQUE,
  "order_id" int
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "color" text,
  "plate" text UNIQUE,
  "model_id" text
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "make" text,
  "model" text,
  "age" date
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int UNIQUE,
  "cars_id" int,
  "agencies_id" int
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "customers" ("addresses_id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("addresses_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "customers" ("order_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("id") REFERENCES "orders" ("cars_id");
