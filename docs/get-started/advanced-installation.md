# Advanced Installation
If you don't like using install scripts, but you like doing stuff yourself, then you can install screenie manually using this guide.

## Prerequisites

- **Operating System**: Ubuntu or any Debian-based Linux distribution.
- **Root Access**: You need to have root or sudo access on the system.
- **Internet Connection**: Ensure the system is connected to the internet for downloading packages.
- **Dependencies**:
  - **Node.js**: JavaScript runtime for the application.
  - **npm**: Node.js package manager for managing dependencies.
  - **MariaDB**: Database server to store and manage application data.
  - **Git**: Version control system to manage and download project files.

## Download Files

Before you begin the installation, ensure that you have the following files in your project directory:

1. **`install.sh`**: A bash script that sets up the environment, installs dependencies, and initializes the database.
2. **`init.js`**: A JavaScript file that creates necessary configurations, generates passwords, and runs initialization scripts.
3. **`initdatabase.sql`**: SQL script to set up the initial database structure.
4. **`db.sql`**: SQL file containing the database dump (data) to be imported into the database.
5. **`init/init.sql`**: SQL commands to create the necessary MySQL user and grant privileges to the `screeniedb` user.
6. **`init/create_admin_user.sql`**: SQL script to create an admin user with a predefined password.
7. **`data/config.json`**: Configuration file (ensure the `maindomain` is set correctly).

Place all these files in the root of your project directory. This will ensure that the setup process can access all required files during the installation and initialization process.

## Install Dependencies

You can choose between two installation methods: **Vanilla Installation** (includes all dependencies) or **Custom Installation** (skips dependency installation).

#### Option 1: Vanilla Installation (Includes Dependencies)

Run the following command to install `Node.js`, `npm`, `MariaDB`, and `pm2` globally, and update the package list:

```bash
./install.sh --vanilla
```

#### Option 2: Custom Installation (Skips Dependencies)
If you want more control and already have the necessary dependencies installed, run the script without the ```--vanilla``` flag:
```bash
./install.sh
```

## Set Up the Database

Once the dependencies are installed, the script will proceed with setting up the database. This involves several steps:

1. **Start the MariaDB Service:**
The command will automatically start the MariaDB service on your system.

```bash
service mariadb enable && service mariadb start
```
2. **Execute initdatabase.sql:**
The script will run the initdatabase.sql file to initialize the database structure.

```bash
mysql -u root -proot -e "source init/initdatabase.sql"
```

3. **Generate SQL User and Password:**
A random password will be generated for the MySQL user `screeniedb` and written to a file for future reference.
::: warning
The file with the passwords will be saved to a text file name `passwords.txt` inside the ``init`` directory. After saving it someplace safe, please remove the file after securing the credentials, as it's not being removed automatically, and can cause security risks.
:::

4. **Create Admin User:**
The script will generate a new admin user for the application
```plaintext
username: admin
password: screenieadmin

```
and insert it into the database.
::: info
After logging in with the admin user for the first time, you will be prompted to change the default password. The alert will pop up every time, until you change your default password.
:::

The following SQL will be run:
```sql
USE screenie;
INSERT INTO users (username, password, private, permission_level, registration_date) 
VALUES ('admin', '<HashedAdminPassword>', 1, 1000, '<CurrentTimestamp>');
```

5. **Final Database Setup:**
Once the users are created, the script will ensure that the permissions are set correctly.

## Configure the Environment

1. **.env file**

The script will create a .env file to store your database connection information. This file will contain the following:

```dotenv
DB_HOST=127.0.0.1
DB_USER=screeniedb
DB_PASSWORD=<GeneratedPassword>
DB_NAME=screenie
```

2. **password.txt file**

The generated passwords for the MySQL user and admin user will be saved in `init/passwords.txt` for future reference.

```plaintext
SQL User Password: <GeneratedPassword>
Admin Password: screenieadmin
```

3. **Final Check**
- Verify that the `maindomain` in `data/config.json` is set correctly.
- Make sure the DB host IP (`DB_HOST`) is set up correctly in the `.env` file.

## Start the app
After the setup is complete, you can start the application by following these steps:

1. **Navigate to the Project Directory:**

First, ensure you're in the project directory where the application files are located.

```bash
cd /path/to/your/project
```

2. **Install Node.js Dependencies:**
If you haven't already installed the required Node.js dependencies, run:

```bash
npm install
```

3. **Start the app:**
You can use `pm2` to start the application, which will help keep it running in the background.

```bash
pm2 start app.js --name "screenie"
```

4. **Check if the Application is Running:**
To check the status of the application, run:

```bash
pm2 status
```

5. **Open the app in your browser:**
Once the application is running, you can access it via your browser. Make sure that the `maindomain` is set correctly in `data/config.json` to point to the correct domain or IP address.

Example:
```plaintext
http://<maindomain>:<nodeserverport>
```

## Auto-Start on system boot (Optional)

If you want the application to automatically start after a reboot, you can set up auto-start with `pm2`:

1. **Generate startup script:**
Run the following command to generate a startup script for your system:

```bash
pm2 startup
```

2. **Save the pm2 process list:**
Save the current pm2 process list so it can restart after a reboot:

```bash
pm2 save
```

## Monitoring and Logs

1. **Monitor Application Logs:**
To view real-time logs for your application, use:

```bash
pm2 logs
```

You can also specify the application name to view logs for that specific app:

```bash
pm2 logs screenie
```

You can monitor the resource usage (CPU, memory, etc.) of the application by using:

```bash
pm2 monit
```

## Stopping the Application

If you need to stop the application, you can use the following command:

```bash
pm2 stop screenie
```

To completely remove it from pm2's process list, use:

```bash
pm2 delete screenie
```

## Conclusion
You've successfully set up and deployed the application! You can now access it, monitor it using `pm2`, and make any updates as necessary. Make sure to check the logs for ongoing performance and error monitoring.