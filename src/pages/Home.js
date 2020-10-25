const Home = () => { 
    // template literal
    const view = `
        <div class="Characters">
            <article class="Character-item">
                <a href="#/1/">
                    <img src="imagen" alt="name">
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    ` ;
    return view;
};

export default Home;