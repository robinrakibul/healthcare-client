import React from 'react';
import img1 from '../../images/image1.png';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.jpg';
const Article = () => {
    return (
        <div className="mb-20  bg-[url('/src/images/Vector2.png')] bg-no-repeat bg-right">
            <div className="text-3xl text-center mt-10 mb-10 font-bold underline underline-offset-8">Check out our latest article</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 mr-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Disease detection, check
                            up in the laboratory</h2>
                        <p>In this case, the role of the health laboratory is very important to do
                            a disease detection...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Herbal medicines that are
                            safe for consumption</h2>
                        <p>Herbal medicine is very widely used at this time because of its very good for your health...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular checkup your health</h2>
                        <p>A healthy lifestyle should start from now and also for your skin health.
                            There are some...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;