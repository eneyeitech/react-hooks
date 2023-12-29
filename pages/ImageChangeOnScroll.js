import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return ( 
        <div>
            <ImageToggleOnScroll 
            primaryImg="/bw/m3.jpg"
            secondaryImg="/m3.jpg" alt=""
            /><br/>
            <ImageToggleOnScroll 
            primaryImg="/bw/m2.jpg"
            secondaryImg="/m2.jpg" alt=""
            /><br/>
            <ImageToggleOnScroll 
            primaryImg="/bw/m3.jpg"
            secondaryImg="/m3.jpg" alt=""
            /><br/>
            <ImageToggleOnScroll 
            primaryImg="/bw/m2.jpg"
            secondaryImg="/m2.jpg" alt=""
            /><br/>
            <ImageToggleOnScroll 
            primaryImg="/bw/m3.jpg"
            secondaryImg="/m3.jpg" alt=""
            /><br/>
            <ImageToggleOnScroll 
            primaryImg="/bw/m2.jpg"
            secondaryImg="/m2.jpg" alt=""
            /><br/>
        
        </div>
     );
}
 
export default ImageChangeOnScroll;