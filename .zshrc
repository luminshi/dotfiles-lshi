# If you come from bash you might have to change your $PATH.
export PATH=$HOME/Bin:$HOME/bin:/usr/local/sbin:$PATH
export PATH=/Library/TeX/texbin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="bira"
DISABLE_AUTO_UPDATE="true"
DISABLE_UPDATE_PROMPT="true"

plugins=(git common-aliases)

source $ZSH/oh-my-zsh.sh

export LANG=en_US.UTF-8
export EDITOR='vim'
