import Button from "../components/Button";
import { BsBellFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";




function ButtonPage(){
    const handleClick = () => { }

    return (
        <div className="flex items-center justify-evenly">
            <div>
                <Button primary className  onClick={handleClick}>
                <BsBellFill />
                    Press Me!
                </Button>
            </div>
            <div>
                <Button secondary outline className>
                <BsBookmarkFill />
                    Try Me!
                </Button>
            </div>
            <div>
                <Button success rounded >
                <BsCalendarEvent />
                    Greetings!
                </Button>
            </div>
            <div>
                <Button danger outline>
                <BsCamera />
                    Purchase
                </Button>
            </div>
            <div>
                <Button warning rounded outline>
                <BsCaretRightFill />
                    Add On!
                </Button>
            </div>
        </div>
    );

};

export default ButtonPage;