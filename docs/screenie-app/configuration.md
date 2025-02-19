# Configuration

Here is a list of all the keys in the config with their meaning:

### data/config.json

| Entry name | Description |
| --- | --- |
| `maindomain` | This is the main domain, if a domain is not set in the config it falls back to this. |
| `uploadkeylength` | The length of characters that are in the upload key. |
| `nodeserverport` | The port for the server. |
| `maxSizePerFileMB` | The maximum size per file in megabytes. |
| `discordInviteURL` | The URL for the Discord invite endpoint. (`maindomain.example/discord` is going to redirect the user to the URL given here) |

### .env File
Here is a list of all the keys in the `.env` file with their meaning:

| Entry name | Description |
| --- | --- |
| `DB_HOST` | The database host IP. |
| `DB_USER` | The database user. |
| `DB_PASSWORD` | The database password. |
| `DB_NAME` | The database name. (default: `screenie`) |