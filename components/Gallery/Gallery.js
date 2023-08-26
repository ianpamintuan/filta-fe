import './styles.css';

export const Gallery = () => {
  return `<section class="gallery">
        <div class="gallery__item">
            <img src="/img/gallery/Image-01.jpg" srcSet="/img/gallery/Image-01@2x.jpg 2x" />
        </div>
        <div class="gallery__item multiImageCol">
            <img src="/img/gallery/Image-02.jpg" srcSet="/img/gallery/Image-02@2x.jpg 2x" />
            <img src="/img/gallery/Image-03.jpg" srcSet="/img/gallery/Image-03@2x.jpg 2x" />
        </div>
        <div class="gallery__item">
            <h2>ANSWER YOUR BODY'S NEEDS</h2>
            <p>
                The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite
                for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on
                high-quality ingredients and being mindful as your appetite guides you to consume according to your body needs
            </p>
            <div>
                <h3>BE MINDFUL</h3>
                <p>Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.</p>
            </div>
        </div>
    </section>`;
};

export default Gallery;
