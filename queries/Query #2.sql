ALTER TABLE `wishlists`
    CHANGE COLUMN `productId` `productIds` JSON NOT NULL,
    ALGORITHM=INPLACE;
