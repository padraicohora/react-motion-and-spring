import React, { useEffect, useState } from 'react';
import {Motion, spring} from 'react-motion';
import { animated, useSpring } from '@react-spring/web'
class MotionMotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    };

    handleMouseDown = () => {
        this.setState({open: !this.state.open});
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };

    render() {
        return (
            <div>
                <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}>
                    Toggle
                </button>

                <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
                    {({x}) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className="demo0">
                            <div className="demo0-block" style={{
                                height:"400px",
                                width:"400px",
                                backgroundColor: "red",
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                            }} />
                        </div>
                    }
                </Motion>
            </div>
        );
    };
}

const Animation = ({open, setOpen}) => {

    const handleMouseDown = () => {
        console.log("handleMouseDown", 1);

        setOpen(!open)
        // this.setState({open: !this.state.open});
    };

    const handleTouchStart = (e) => {
        e.preventDefault();
        handleMouseDown();
    };
    const styles = useSpring({
        WebkitTransform:  `translate3d(${open ? 400 : 0}px, 0, 0)`,
        transform: `translate3d(${open ? 400 : 0}px, 0, 0)`,
        height:"400px",
        width:"400px",
        backgroundColor: "red"
    })
    return (
        <div>
            <button
                onClick={handleTouchStart}>
                Toggle
            </button>
            <div className="demo0">
                <animated.div  className="demo0-block" style={styles} />
            </div>

        </div>
    );
}

export const SpringMotion = () => {
    const [open, setOpen] = useState()
    return <Animation open={open} setOpen={setOpen}/>
}
export default MotionMotion