# If you come from bash you might have to change your $PATH.
export PATH=$HOME/Bin:$HOME/bin:/usr/local/sbin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="bira"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
DISABLE_UPDATE_PROMPT="true"

plugins=(git common-aliases)

source $ZSH/oh-my-zsh.sh

# User configuration
# You may need to manually set your language environment
export LANG=en_US.UTF-8
# Preferred editor for local and remote sessions
export EDITOR='vim'

# Aliases
# check weather
alias weather='curl wttr.in/eugene_or\?0'
# mpv youtube-dl download best possible
alias mpv-4k='mpv --ytdl-format="bestvideo[height<=?2160]+bestaudio/best"'
# mpv youtube-dl download 1440 max
alias mpv-2k='mpv --ytdl-format="bestvideo[height<=?1440]+bestaudio/best"'

