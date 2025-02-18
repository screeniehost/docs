# Troubleshooting
Technology breaks always, so here's some fixes, that should solve your issues, when installing screenie.

## MySQL Not Installed
If MySQL is not found or there was an error during the installation, you can manually run the following SQL scripts to set up the database and users:

1. **`init/init.sql`: Create the necessary database user:**
```sql
DROP USER IF EXISTS 'screeniedb'@'127.0.0.1';
CREATE USER 'screeniedb'@'127.0.0.1' IDENTIFIED BY '<GeneratedPassword>';
GRANT ALL PRIVILEGES ON `screenie`.* TO 'screeniedb'@'127.0.0.1';
FLUSH PRIVILEGES;
```

2. **`init/create_admin_user.sql`: Create the admin user:**
```sql
USE screenie;
INSERT INTO users (username, password, private, permission_level, registration_date) 
VALUES ('admin', '<HashedAdminPassword>', 1, 1000, '<CurrentTimestamp>');
```

3. **Configuration Checks:**
- Ensure the `maindomain` in `data/config.json` is set correctly.
- Ensure the DB host is set in the `.env` file.