
const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll('.social-network a');

        icons.forEach( (link) => {
            link.addEventListener('mouseover', (e: any ): void => {
                link.setAttribute('style', `transform: translate(${e.offsetX - 20}px, ${e.offsetY - 13}px);`);
            })

            link.addEventListener('mouseleave', (): void => {
                link.setAttribute('style', `transform: translate(0, 0);`);
            })
        } )
    }

    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.facebook.fr" rel="noopener noreferrer" target="_blanc" className="hover" title="Facebook" onMouseOver={anim} >
                    <li>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                </a>
                <a href="https://www.twitter.fr" rel="noopener noreferrer" target="_blanc" className="hover" title="twitter" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                </a>
                <a href="https://www.instagram.fr" rel="noopener noreferrer" target="_blanc" className="hover" title="instagram" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-instagram"></i>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;
