set background=dark

" Make Vim more useful
set nocompatible
filetype plugin on
" Use UTF-8 without BOM
set encoding=utf-8 nobomb

" Enable line numbers
set number
" Enable syntax highlighting
syntax on
" Make tabs as wide as four spaces
set tabstop=4
set shiftwidth=4
set expandtab
set smarttab
" Indentation
set autoindent
set smartindent
" Highlight searches
set hlsearch
" Ignore case of searches
set ignorecase
" Disable error bells
set noerrorbells
" Show the cursor position
set ruler
" Show the current mode
set showmode
" Show the filename in the window titlebar
set title
" Show the (partial) command as it’s being typed
set showcmd

" Toggle spell checking on and off with `,s`
let mapleader = "," 
nmap <silent> <leader>s :set spell!<CR>
" Set region to US English
set spelllang=en_us
