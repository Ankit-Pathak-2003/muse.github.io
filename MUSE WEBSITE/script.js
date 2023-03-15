<script>
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelectorAll('nav ul li a');
    dropdown.forEach(function(el) {
      el.addEventListener('click', function(e) {
        var nextSibling = this.nextElementSibling;
        if (nextSibling.classList.contains('dropdown')) {
          e.preventDefault();
          if (nextSibling.style.display === 'block') {
            nextSibling.style.display = 'none';
          } else {
            nextSibling.style.display = 'block';
          }
        }
      });
    });
  });
</script>