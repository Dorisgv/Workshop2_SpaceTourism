import React, { useEffect, useState } from "react";
import data from "src/data/data.json";


const Technology = () => {

    const [techData, setTechData] = useState({
        name: data.technology[0].name,
        description: data.technology[0].description,
        image: data.technology[0].images.portrait,
        imageDesktop: data.technology[0].images.landscape,
        id: data.technology[0].id,
    });

    const handleClick = (item) => {
        setTechData({
            name: item.name,
            description: item.description,
            image: item.images.portrait,
            imageDesktop: item.images.landscape,
            id: item.id,
        });
    };

    useEffect(() => {
        let linkItem = document.querySelector("#technology");
        linkItem.classList.add("active");

        let circle = document.querySelector(`#circle-${techData.id}`);
        circle.classList.add("active");

        return () => {
            linkItem.classList.remove("active");
            circle.classList.remove("active");
        };
    }, [techData]);

    return (
        <section className="container-technology">
            <div className="technology-title">
                <span>03</span>
                <p>Space Launch 101</p>
            </div>
            <div className="technology-wrapper">
                <div className="technology-left-image">
                    <img src={techData.imageDesktop} className="technology-landscape" alt={techData.name} />
                    <div className="technology-left-circles">
                        {data.technology.map((item) => {
                            return (
                                <div className="technology-circle"
                                    key={item.id}
                                    id={`circle-${item.id}`}
                                    onClick={() => handleClick(item)}
                                >
                                    <span>{item.id}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="technology-center-content">
                        <p className="technology-center-title"> The terminology...</p>
                        <h1>{techData.name}</h1>
                        <p className="technology-center-description">{techData.description}</p>
                    </div>
                </div>
                <div className="technology-right-content">
                    <img src={techData.image} alt={techData.name} />
                </div>
            </div>
        </section>
    );
};

export default Technology; 