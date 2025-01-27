-- Remove AUTO_INCREMENT from `id` column (if it was set)
ALTER TABLE `contacts`
  MODIFY COLUMN `id` INT(11) NOT NULL;

-- Drop the existing primary key on the `id` column
ALTER TABLE `contacts`
  DROP PRIMARY KEY;

-- Change `id` column to UUID (CHAR(36)) and set it as primary key
ALTER TABLE `contacts`
  CHANGE `id` `id` CHAR(36) NOT NULL PRIMARY KEY;

-- Add a unique constraint to the `email` column
ALTER TABLE `contacts`
  ADD UNIQUE KEY `email` (`email`);

-- Modify `created` column to set current timestamp by default
ALTER TABLE `contacts`
  MODIFY COLUMN `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
