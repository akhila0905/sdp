import React, { Component } from 'react';
export default class Card extends Component{
    render()
    {
        return(
            <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
           <div className="card p-0 overflow-hidden h-100 shadow">
         
  <img src={this.props.img} class="card-img-top"  height='300px' alt="..." />
  <div class="card-body">
    <h5 class="card-title">{this.props.title}</h5>
    
    <a href={this.props.link} style={{fontSize:'10px'}}>Shop now</a>

    
    </div>

  </div>
</div>
        )
    }
}