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
" Show the (partial) command as it’s being typed
" Set region to US English
set spelllang=en_us
set t_Co=256
" make backspace work like most other programs
set backspace=2 


" Plugins will be downloaded under the specified directory.
call plug#begin('~/.vim/plugged')
" Declare the list of plugins.
Plug 'flazz/vim-colorschemes'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'scrooloose/nerdtree'
" List ends here. Plugins become visible to Vim after this call.
call plug#end()

map <C-n> :NERDTreeToggle<CR>
colo gruvbox
set background=light
let g:airline_theme='simple'
let g:airline#extensions#tabline#enabled = 1

" use tab and shift+tab to switch to next and previous buffer
nnoremap  <silent>   <tab>  :if &modifiable && !&readonly && &modified <CR> :write<CR> :endif<CR>:bnext<CR>
nnoremap  <silent> <s-tab>  :if &modifiable && !&readonly && &modified <CR> :write<CR> :endif<CR>:bprevious<CR>
