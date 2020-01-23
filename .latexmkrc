$pdf_previewer = 'open -a Skim';
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode';
$clean_ext = "bbl nav out snm %R-blx.bib %R.run.xml";
@generated_exts = (@generated_exts, 'synctex.gz');

