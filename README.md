# pong_tournament

A pong tournament website.
You can play [pong](https://en.wikipedia.org/wiki/Pong) in tournaments or challenge friends and chat with them, in private or in chatrooms (public, protected or private).
You could create or join a guild and declare war on other guilds.
As an admin, you can kick, mute, update privileges, create, update and destroy tournaments and chatrooms. __(docker-compose)__

![Recordit GIF](https://github.com/trixky/pong_tournament/blob/master/.demo/demo.gif?raw=true)

## Usage

```bash
sudo docker-compose up --build
```
You can then connect to the site at [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

> You must have an account [42](https://www.42.fr/) to be able to create an account !

## Stack

- Ruby on Rails
- Backbone.js
- postgreSQL
- ActionCable
- 2FA
