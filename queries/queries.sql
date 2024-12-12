CREATE TABLE `roles` (
  `id` UUID PRIMARY KEY,
  `user_id` CHAR(36) NOT NULL,  -- Adjusted to CHAR(36) to match users(id)
  `is_admin` BOOLEAN DEFAULT FALSE,
  `role_id` UUID NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `role_name` VARCHAR(255) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
