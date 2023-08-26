import './styles.css';

export const BlogSection = () => {
  return `
        <section class="blog">
            <h1>ALL THE LATEST FROM AEG</h1>
            <div class="blog__container">
                <a class="blog__item" href="#">
                    <img src="/img/blog/Image-01.jpg" alt="Summer Lunch Menu" srcSet="/img/gallery/Image-01@2x.jpg 2x" />
                    <div>
                        <h2>Summer Lunch Menu by Mark Best</h2>
                        <p>
                            AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.
                        </p>
                    </div>
                    <span >READ MORE</span>
                </a>
                <a class="blog__item" href="#">
                    <img src="/img/blog/Image-02.jpg" alt="A Traditional Christmas Eve" srcSet="/img/gallery/Image-02@2x.jpg 2x" />
                    <div>
                        <h2>A Traditional Christmas Eve, Mark Best Style</h2>
                        <p>
                            One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.
                        </p>
                    </div>
                    <span>READ MORE</span>
                </a>
                <a class="blog__item" href="#">
                    <img src="/img/blog/Image-03.jpg" alt="Taking Taste Further" srcSet="/img/gallery/Image-03@2x.jpg 2x" />
                    <div>
                        <h2>Taking Taste Further</h2>
                        <p>
                            This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products — 
                            and the best out of your food
                        </p>
                    </div>
                    <span>READ MORE</span>
                </a>
            </div>
        </section>
    `;
};

export default BlogSection;
