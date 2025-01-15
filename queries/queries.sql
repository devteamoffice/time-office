ALTER TABLE roles
DROP FOREIGN KEY roles_ibfk_1,  -- Remove the existing foreign key constraint
ADD CONSTRAINT roles_ibfk_1
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;
