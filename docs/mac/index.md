# Mac

## GitHub
* https://github.com/microsoft/vscode-remote-release/issues/4024

## Terminal

- Remove folder including files (-r="recursive", -f="force")

```bash
rm -rf some_dir
```

- Change owner

```bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/lib/node_modules
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

- Execute permissions file
```bash
chmod +x *.sh
```

## Finder
- Show hidden folders/files --> command-shift-period