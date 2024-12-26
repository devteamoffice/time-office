ALTER TABLE `carts`
  ADD CONSTRAINT `fk_user_cart`
  FOREIGN KEY (`userId`)
  REFERENCES `users` (`id`)
  ON DELETE CASCADE;
