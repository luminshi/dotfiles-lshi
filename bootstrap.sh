#!/bin/bash

if ! hash rsync 2>/dev/null; then
    echo "Please install rsync."
    exit 1
fi

if ! hash curl 2>/dev/null; then
    echo "Please install curl."
    exit 1
fi

if ! hash zsh 2>/dev/null; then
    echo "Please install zsh."
    exit 1
fi

# check if oh-my-zsh is installed
if [ -d $HOME/.oh-my-zsh ]
then
    echo "Oh-my-zsh folder exists. Assuming you have installed oh-my-zsh."
else
    echo "Install oh-my-zsh first.  Aborting.";
    echo ""
    echo 'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"';
    echo "";
    exit 1;
fi

# install vim plug
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

# cd to dotfiles folder
cd "$(dirname "${BASH_SOURCE}")";


# function to copy my dotfiles
function doIt() {
	rsync --exclude ".git/" --exclude ".DS_Store" --exclude "bootstrap.sh" \
		--exclude "README.md" --exclude "LICENSE" -avh --no-perms . ~;
}

# confirm with me before install
if [ "$1" == "--force" -o "$1" == "-f" ]; then
	doIt;
else
	read -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " -n 1;
	echo "";
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		doIt;
	fi;
fi;
unset doIt;

