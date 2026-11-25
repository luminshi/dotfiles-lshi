#!/usr/bin/env bash
#
# Install these dotfiles into $HOME.
#
# Usage: ./bootstrap.sh [--force | --dry-run | --help]

set -euo pipefail

msg() { printf '%s\n' "$*" >&2; }

usage() {
    cat >&2 <<EOF
Usage: ${0##*/} [option]

  -f, --force     Copy dotfiles without asking for confirmation
  -n, --dry-run   Show what would be copied, change nothing
  -h, --help      Show this help
EOF
}

for cmd in rsync curl zsh vim; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
        msg "Please install $cmd."
        exit 1
    fi
done

# check if oh-my-zsh is installed
if [ ! -d "$HOME/.oh-my-zsh" ]; then
    msg "Oh-my-zsh folder not found. Install it first:"
    msg '  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"'
    exit 1
fi

# install vim plug
if [ ! -f "$HOME/.vim/autoload/plug.vim" ]; then
    msg "Installing vim-plug..."
    curl -fLo "$HOME/.vim/autoload/plug.vim" --create-dirs \
        https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
fi

# cd to dotfiles folder
cd -- "$(dirname -- "${BASH_SOURCE[0]:-$0}")"
if [ ! -f .vimrc ]; then
    msg "Dotfiles not found in $PWD; aborting."
    exit 1
fi

excludes=(
    --exclude ".git/"
    --exclude ".DS_Store"
    --exclude "bootstrap.sh"
    --exclude "README.md"
    --exclude "LICENSE"
)

# Ghostty is configured for Linux only. macOS keeps its config in
# "~/Library/Application Support/com.mitchellh.ghostty", not "~/.config/ghostty".
if [ "$(uname -s)" != "Linux" ]; then
    excludes+=(--exclude ".config/ghostty/")
fi

# function to copy my dotfiles
doIt() {
    rsync "${excludes[@]}" -avh --no-perms "$@" . "$HOME"
}

case "${1:-}" in
    -f|--force)
        doIt
        ;;
    -n|--dry-run)
        doIt --dry-run
        exit 0
        ;;
    -h|--help)
        usage
        exit 0
        ;;
    "")
        if [ ! -t 0 ]; then
            msg "No terminal to confirm in; re-run with --force."
            exit 1
        fi
        read -r -n 1 -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " reply || exit 1
        printf '\n'
        if [[ $reply =~ ^[Yy]$ ]]; then
            doIt
        else
            msg "Aborted."
            exit 1
        fi
        ;;
    *)
        msg "Unknown option: $1"
        usage
        exit 1
        ;;
esac

msg ""
msg "Done. Run 'vim +PlugInstall +qall' to install the Vim plugins."
