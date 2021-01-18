filetype plugin on
set number
syntax on
set expandtab  " uses spaces instead of tab
set tabstop=4  " set the tab key to equal 4 spaces
set softtabstop=4
set shiftwidth=4  " set 4 spaces for identation in normal mode
set hlsearch
set ignorecase
set noerrorbells
set ruler
set showmode
set spelllang=en_us
set t_Co=256

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
set bg=dark

" airline configs
let g:airline_theme='base16_gruvbox_dark_hard'
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'


" use tab and shift+tab to switch to next and previous buffer
nnoremap  <silent>   <tab>  :if &modifiable && !&readonly && &modified <CR> :write<CR> :endif<CR>:bnext<CR>
nnoremap  <silent> <s-tab>  :if &modifiable && !&readonly && &modified <CR> :write<CR> :endif<CR>:bprevious<CR>
