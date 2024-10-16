const seedPermissions = async () => {
  await Permission.bulkCreate([
    { action: "view_users", roleId: 1, isAllowed: true }, // Admin
    { action: "edit_users", roleId: 1, isAllowed: true }, // Admin
    { action: "delete_users", roleId: 1, isAllowed: true }, // Admin
    { action: "view_users", roleId: 2, isAllowed: true }, // Developer
    { action: "edit_users", roleId: 2, isAllowed: false }, // Developer cannot edit users
    { action: "delete_users", roleId: 3, isAllowed: false }, // Merchant cannot delete users
  ]);
};
