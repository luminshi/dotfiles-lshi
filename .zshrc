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

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/luminshi/mambaforge/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/luminshi/mambaforge/etc/profile.d/conda.sh" ]; then
        . "/Users/luminshi/mambaforge/etc/profile.d/conda.sh"
    else
        export PATH="/Users/luminshi/mambaforge/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

