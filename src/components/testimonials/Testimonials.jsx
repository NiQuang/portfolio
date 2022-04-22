import React from 'react';
import './testimonials.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/imgs/avt1.jpg';
import img2 from '../../assets/imgs/avt2.jpg';
import img3 from '../../assets/imgs/avt3.jpg';
import img4 from '../../assets/imgs/avt4.jpg';

const Testimonials = () => {
    const data = [
        {
            img: img1,
            name: 'Liam',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            img: img2,
            name: 'Benjamin',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            img: img3,
            name: 'Charlotte',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            img: img4,
            name: 'Isabella',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        }
    ]

    return (
        <section id='testimonials'>
            <h5>reviews from client</h5>
            <h2>Testimonials</h2>
            <div className="testimonials container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {
                        data.map((item, index) => (
                            <SwiperSlide className="testimonials__item"  key={index}>
                                <div className="testimonials__item--avt">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="testimonials__item--name">
                                    <p>{item.name}</p>
                                </div>
                                <div className="testimonials__item--content">
                                    {item.detail}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials