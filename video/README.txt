CARTELLA VIDEO — marcofreschi.github.io/video/

Metti qui i video del portfolio. Formato consigliato: MP4 (H.264).
Dimensione massima: 50MB per file (GitHub Pages ha limite 100MB).

Per collegare un video a una card del portfolio, sostituisci nel file index.html:
  <!-- Replace with: <video src="video/nome-file.mp4" autoplay muted loop playsinline></video> -->
con:
  <video src="video/nome-file.mp4" autoplay muted loop playsinline></video>

Se il video è su YouTube, usa invece:
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen
    style="width:100%;height:100%;position:absolute;top:0;left:0"></iframe>
