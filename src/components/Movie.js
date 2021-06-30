import react from "react";

const Movie = (props) => {
    const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={ImageURL} />
                            <span className="card-title">Card Title</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;