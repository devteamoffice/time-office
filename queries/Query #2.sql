UPDATE users u
JOIN roles r ON u.id = r.user_id
SET u.role = r.role_name;
