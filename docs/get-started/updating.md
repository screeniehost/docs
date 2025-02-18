# Updating
Here's a quick guide on how to update the app.


1. **Stop the app first:**

To update the app, you need to stop the app from running first to avoid any bugs or issues happening with the command:
```bash
pm2 stop screenie
```

2. **Pull the latest changes from the GitHub repository:**

To pull the latest version of the app using Git, you can use the following command to clone it to your machine:

### When using HTML URLs
```bash
git clone https://github.com/screeniehost/screenie.git
```

### or when using SSH Keys [(advanced)](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
```bash
git clone git@github.com:screeniehost/screenie.git
```

3. **Reinstall dependencies (if necessary):**
```bash
npm install
```

4. **Restart the app:**
```bash
pm2 restart screenie
```