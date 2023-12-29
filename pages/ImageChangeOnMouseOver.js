import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return ( 
        <div>
            <ImageToggleOnMouseOver 
            primaryImg="/bw/m2.jpg"
            secondaryImg="/m2.jpg" alt=""/>
            
            &nbsp;&nbsp;&nbsp;

            <ImageToggleOnMouseOver 
            primaryImg="/bw/m3.jpg"
            secondaryImg="/m3.jpg" alt=""/>
        </div>
     );
}
 
export default ImageChangeOnMouseOver;