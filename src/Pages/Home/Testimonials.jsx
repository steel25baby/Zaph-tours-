import React from 'react'
import person1 from "../../assets/Testimony1.jpeg"
import person3 from "../../assets/Testimony3.jpeg"
import person4 from "../../assets/Testimony4.jpeg"
import person5 from "../../assets/Testimony5.jpeg"

const TestimonyDetails =({image, info, names}) => {
    return(
        <section className='TestimonyDetails'>
            <div className='TestimonyDetailsImage'>
            <img className='personimage' src={image} alt="" />
            </div>
            <div className='TestimonyDetailsRight'>
            <p className='persontestimony'>{info}</p>
            <h3>{names}</h3>
            </div>
        </section>
    )
}

const Testimonials = () => {
    return (
        <section className='Testimonials'>
            <h1 className='Testimonials-header'>Testimonials</h1>
            <div className='motherDetails'>
                <TestimonyDetails image={person1} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Rosemary Gitonga" />
                <TestimonyDetails image={person1} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Consolata Gitonga" />
                <TestimonyDetails image={person3} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Philemon Gitonga" job="Software Engineer"/>
                <TestimonyDetails image={person4} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Timothy Adam" />
                <TestimonyDetails image={person5} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Hannah Gitonga" />
                <TestimonyDetails image={person3} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Crystal Gitonga" />
            </div>
        </section>
      )
}

export default Testimonials