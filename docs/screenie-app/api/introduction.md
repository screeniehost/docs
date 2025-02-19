# Introduction

::: info
the updated version api section of the documentation is coming soon, but until it's updated, here's the list of the API endpoints for the main screenie app
:::

| Request type | Endpoint | Description |
| :---: | :---: | --- |
| <Badge type="tip" text="GET" /> | `/api/uploads/:uploadkey` | Returns a list of uploads uploaded with the upload key. |
| <Badge type="tip" text="GET" /> | `/api/domains` | Returns a list of all the domains. |
| <Badge type="warning" text="POST" /> | `/api/upload` | This is the upload URL, and you can use other apps to upload files. In the post body you only need the `uploadKey` and the `file`. |
| <Badge type="tip" text="GET" /> | `/api/profile_pictures` | Returns profile pictures. |
| <Badge type="tip" text="GET" /> | `/admin/user/:id` | Returns user details by user ID. |
| <Badge type="warning" text="POST" /> | `/admin/user/:id` | Updates user details by user ID. |
| <Badge type="danger" text="DELETE" /> | `/admin/user/:id` | Deletes a user by user ID. |
| <Badge type="tip" text="GET" /> | `/admin/upload/:id` | Returns upload details by upload ID. |
| <Badge type="danger" text="DELETE" /> | `/admin/upload/:id` | Deletes an upload by upload ID. |
| <Badge type="tip" text="GET" /> | `/admin/domain/:id` | Returns domain details by domain ID. |
| <Badge type="warning" text="POST" /> | `/admin/domain` | Adds a new domain. |
| <Badge type="warning" text="POST" /> | `/admin/upload/:id` | Updates domain details by domain ID. |
| <Badge type="danger" text="DELETE" /> | `/admin/upload/:id` | Deletes an upload by domain ID. |