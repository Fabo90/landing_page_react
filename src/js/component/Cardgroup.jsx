import React from "react";
import Card from "./Card";

const Cardgroup = () => { 
    return ( 
        <div class="row container mt-4 mx-auto">
            <div class="col-12 col-md-4 col-lg-3 col-sm-6 py-2">
                <Card 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei-mdod tempor incididunt ut labore et dolore aliqua." 
                imgUrl="https://picsum.photos/500/325?random=1"
                />
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-sm-6 py-2">
                <Card 
                text="Malesuada fames ac turpis egestas sed. Adipiscing elit ut aliquam purus sit amet luctus. Quis lectus nulla at volutpat." 
                imgUrl="https://picsum.photos/500/325?random=2"
                />
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-sm-6 py-2">
                <Card 
                text="Faucibus et molestie ac feugiat sed lectus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis."
                imgUrl="https://picsum.photos/500/325?random=3"
                />
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-sm-6 py-2">
                <Card 
                text="Ac placerat vestibulum lectus mauris ultrices eros. Pretium viverra suspendisse potenti nullam ac tortor." 
                imgUrl="https://picsum.photos/500/325?random=4"
                />
            </div>
        </div>
    );
};
export default Cardgroup;
