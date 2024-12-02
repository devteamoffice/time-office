ALTER TABLE `users`
DROP INDEX `email_9`;

ALTER TABLE `users`
DROP INDEX `email_10`;

ALTER TABLE `users`
DROP INDEX `email_11`;

ALTER TABLE `users`
DROP INDEX `email_12`;

ALTER TABLE `users`
DROP INDEX `email_13`;

ALTER TABLE `users`
DROP INDEX `email_14`;

ALTER TABLE `users`
DROP INDEX `email_15`;

ALTER TABLE `users`
DROP INDEX `email_16`;

ALTER TABLE `users`
DROP INDEX `email_17`;

ALTER TABLE `users`
DROP INDEX `email_18`;

ALTER TABLE `users`
DROP INDEX `email_2`;

ALTER TABLE `users`
DROP INDEX `email_3`;

ALTER TABLE `users`
DROP INDEX `email_4`;

ALTER TABLE `users`
DROP INDEX `email_5`;

ALTER TABLE `users`
DROP INDEX `email_6`;

ALTER TABLE `users`
DROP INDEX `email_7`;

ALTER TABLE `users`
DROP INDEX `email_8`;

-- Optionally, ensure there is only one unique index on email
ALTER TABLE `users`
ADD UNIQUE INDEX `email` (`email`) USING BTREE;
