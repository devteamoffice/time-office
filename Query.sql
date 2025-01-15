-- Step 1: Ensure the 'users' table has an indexed 'id' column
CREATE INDEX `idx_userId` ON `users` (`id`);

-- Step 2: Add the 'id' column as primary key in 'cart_items' table
ALTER TABLE `cart_items`
  ADD COLUMN `id` CHAR(36) NOT NULL DEFAULT (UUID());

-- Step 3: Drop the existing primary key (cartId, productId)
ALTER TABLE `cart_items`
  DROP PRIMARY KEY;

-- Step 4: Set 'id' as the primary key
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`);

-- Step 5: Add the 'userId' column
ALTER TABLE `cart_items`
  ADD COLUMN `userId` CHAR(36) NOT NULL;

-- Step 6: Add the foreign key constraint on 'userId'
ALTER TABLE `cart_items`
  ADD CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE;

-- Step 7: Modify 'cartId' to remain important but not a primary key
ALTER TABLE `cart_items`
  MODIFY COLUMN `cartId` CHAR(36) NOT NULL;

-- Optional: Add indexes for cartId and productId to improve query performance
ALTER TABLE `cart_items`
  ADD INDEX `cartId_index` (`cartId`),
  ADD INDEX `productId_index` (`productId`);
