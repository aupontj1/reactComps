import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return <div className="relative">
        {showModal && 
        <Modal 
        onClose={handleClose} 
        actionBar={<Button onClick={handleClose} primary>I Accept</Button>}> 
            <p> Here Lies an important piece of text.</p> 
         </Modal>}

         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Porttitor massa id neque aliquam vestibulum morbi. Nibh tortor id aliquet lectus proin. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Tempus egestas sed sed risus pretium. Arcu dictum varius duis at consectetur lorem. In fermentum posuere urna nec tincidunt praesent semper. Pharetra et ultrices neque ornare aenean euismod elementum. Id porta nibh venenatis cras sed felis eget velit aliquet. Congue quisque egestas diam in arcu. Id donec ultrices tincidunt arcu non. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Odio eu feugiat pretium nibh ipsum consequat nisl.
            Morbi tristique senectus et netus et malesuada. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
            Accumsan lacus vel facilisis volutpat est. Praesent semper feugiat nibh sed pulvinar. Vitae tempus quam pellentesque nec nam aliquam sem et. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Quisque sagittis purus sit amet volutpat consequat mauris nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Ullamcorper dignissim cras tincidunt lobortis. 
            Ac turpis egestas integer eget aliquet. 
            Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. In mollis nunc sed id. Lacus laoreet non curabitur gravida arcu. Egestas pretium aenean pharetra magna. Enim blandit volutpat maecenas volutpat blandit. Nibh praesent tristique magna sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Mi sit amet mauris commodo quis. Interdum velit euismod in pellentesque massa placerat duis. Quis auctor elit sed vulputate mi sit amet mauris commodo. Congue eu consequat ac felis donec et odio pellentesque diam. Purus non enim praesent elementum. Ipsum nunc aliquet bibendum enim facilisis gravida neque. At volutpat diam ut venenatis. Fermentum et sollicitudin ac orci phasellus egestas. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Purus gravida quis blandit turpis cursus in. Nibh mauris cursus mattis molestie. Posuere ac ut consequat semper viverra nam libero justo laoreet. Bibendum at varius vel pharetra vel.
            Vestibulum morbi blandit cursus risus at ultrices mi. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sapien eget mi proin sed libero enim sed faucibus turpis. Urna neque viverra justo nec ultrices dui. Pharetra et ultrices neque ornare aenean euismod. Malesuada fames ac turpis egestas maecenas pharetra. Rhoncus urna neque viverra justo nec. Lectus arcu bibendum at varius vel pharetra vel turpis. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Dui accumsan sit amet nulla facilisi. Semper eget duis at tellus at urna condimentum. Turpis egestas pretium aenean pharetra magna ac placerat. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Lacus vel facilisis volutpat est velit egestas.
            Pulvinar neque laoreet suspendisse interdum consectetur. Mauris ultrices eros in cursus turpis. Ut enim blandit volutpat maecenas volutpat blandit. Nunc vel risus commodo viverra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sagittis id consectetur purus ut faucibus pulvinar elementum. Luctus venenatis lectus magna fringilla urna porttitor. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Dignissim diam quis enim lobortis scelerisque. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Tristique nulla aliquet enim tortor at. Tristique magna sit amet purus. Libero volutpat sed cras ornare arcu. Vehicula ipsum a arcu cursus vitae congue. Lobortis feugiat vivamus at augue eget arcu dictum. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Sit amet facilisis magna etia
         </p>
         <div className='absolute bottom--10 right-5 p-3'>
            <Button onClick={handleClick} primary>Open Modal</Button>
         </div>
    </div>
}

export default ModalPage;