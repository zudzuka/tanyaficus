mkdir compressed 2>nul

:: Compress all images to .jpg
for %%b in (*.png *.jpg) do (
    ffmpeg -i "%%b" -vf scale=1280:-1 -qscale:v 10 "compressed\%%~nb.jpg"
)

pause