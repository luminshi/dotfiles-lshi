# Preview the PDF with Skim on macOS and with the desktop's default viewer
# elsewhere.  latexmk substitutes %S with the file to be previewed; without a
# placeholder it would append "%O %S" for you, which this spells out instead.
if ($^O eq 'darwin') {
    $pdf_previewer = 'open -a Skim %S';
}
else {
    $pdf_previewer = 'xdg-open %S';
}

$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode';
$clean_ext = "bbl nav out snm %R-blx.bib %R.run.xml";
@generated_exts = (@generated_exts, 'synctex.gz');
