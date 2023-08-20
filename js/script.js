<script>
   var macy = Macy({
  container: '.gallery-wrapper',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 1,
    700: 2,
    1100: 3,
  },
  margin: {
    x: 20,
    y: 20,
  }
})


</script>
<script>
    function toogleShowGallery() {
    const gallery = document.getElementById("gallery");
    const shadow = document.getElementById("gallery-background");
    const btnMore = document.getElementById("button-more")
    gallery.classList.toggle("show-gallery");
    shadow.classList.toggle("shadow-gallery-hide");
    btnMore.classList.toggle("button-white")
    } 
</script>