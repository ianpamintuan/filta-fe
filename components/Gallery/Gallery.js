import Modal from '../Modal/Modal';
import './styles.css';

export const Gallery = () => {
  // Add modal events
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const modal = document.querySelector('#modal');
      const closeModal = document.querySelector('#modal .close');
      var modalImg = document.querySelector('#modal-image');
      const imageButtons = document.querySelectorAll('.gallery__item a');

      // Attach events to images
      imageButtons.forEach((img) => {
        const imageSrc = img.querySelector('img').src;

        img.addEventListener('click', (e) => {
          e.preventDefault();

          // Log clicked image
          console.log(img);

          // Show modal and attach the clicked image
          modal.style.display = 'block';
          modalImg.style.display = 'block';
          modalImg.src = imageSrc;
        });
      });

      // Close events
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  };

  return `
    ${Modal()}
    <section class="gallery">
        <div class="gallery__item">
            <a href="#">
                <img src="/img/gallery/Image-01.jpg" srcSet="/img/gallery/Image-01@2x.jpg 2x" alt="Man holding a child's hand" />
            </a>
        </div>
        <div class="gallery__item multiImageCol">
            <a href="#">
                <img src="/img/gallery/Image-02.jpg" srcSet="/img/gallery/Image-02@2x.jpg 2x" alt="Assorted fruits" />
            </a>
            <a href="#">
                <img src="/img/gallery/Image-03.jpg" srcSet="/img/gallery/Image-03@2x.jpg 2x" alt="Asparagus" />
            </a>
        </div>
        <div class="gallery__item">
            <h2 class="heading">ANSWER YOUR BODY'S NEEDS</h2>
            <p class="heading-description">
                The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite
                for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on
                high-quality ingredients and being mindful as your appetite guides you to consume according to your body needs
            </p>
            <div class="be-mindful">
                <h3>BE MINDFUL</h3>
                <p>Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.</p>
            </div>
        </div>
    </section>
    `;
};

export default Gallery;
