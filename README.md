That's right, you are seeing some dotfiles.
;)

## Install

Requires `rsync`, `curl`, `zsh`, and `vim`, plus an existing
[oh-my-zsh](https://ohmyz.sh) install.

```sh
git clone <this repo> ~/dotfiles && ~/dotfiles/bootstrap.sh
```

- `-f`, `--force` – copy without asking for confirmation (needed when stdin is
  not a terminal, e.g. `curl ... | bash`)
- `-n`, `--dry-run` – show what would be copied
- `-h`, `--help` – usage

Afterwards run `vim +PlugInstall +qall` to install the Vim plugins.

## Notes

Mostly configured for macOS. The platform-specific bits fall back gracefully on
Linux: `.latexmkrc` previews with Skim on macOS and `xdg-open` elsewhere,
`.zshrc` only adds the MacTeX `PATH` when it exists, and `.phoenix.js` is simply
unused outside macOS.
