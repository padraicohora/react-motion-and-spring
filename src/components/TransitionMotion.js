
import React, {Children, useEffect, useState} from "react"
import {TransitionMotion, spring} from "react-motion"
import {useTransition, animated} from "react-spring"
class TransitionMotionDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    willLeave() {
        // triggered when c's gone. Keeping c until its width/height reach 0.
        return {width: spring(0), height: spring(0), opacity: spring(-1)};
    }
    willEnter(styleThatEntered) {
        // triggered when c's gone. Keeping c until its width/height reach 0.
        console.log({styleThatEntered})
        return {width: 0, height:  0, opacity: -1};
    }
    toggleItems(){
        console.log(this)
        if(this.state.items?.length >0){
            this.setState({
                items: [], // remove c.
            });
        }else {
            this.setState({
                items: [{key: 'a', size: 30}, {key: 'b', size: 30}, {key: 'c', size: 30}], // remove c.
            });
        }
    }

    render() {
        return (
            <>
                <button onClick={this.toggleItems.bind(this)}> Toggle items</button>
                <TransitionMotion
                    willEnter={this.willEnter}
                    willLeave={this.willLeave}
                    styles={this.state.items.map(item => ({
                        key: item.key,
                        style: {
                            width: spring(item.size),
                            height: spring(item.size),
                            opacity: spring(1)
                        },
                    }))}>
                    {interpolatedStyles =>
                        // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
                        <div>
                            {interpolatedStyles.map(config => {
                                console.log({config})
                                return <div key={config.key}
                                            style={{...config.style, backgroundColor: "green"}}>
                                    {config.key}Y
                                </div>
                            })}
                        </div>
                    }
                </TransitionMotion></>
        );
    }
}

export const TransitionSpring = () => {
    const initialState = [
        {key: 'a', size: 10}, {key: 'b', size: 20}, {key: 'c', size: 30}
    ]
    const [state, setState] = useState(initialState)

    const transitions = useTransition(state, {
        from: { opacity: 0, width: 0, height: 0 },
        enter: { opacity: 1, width: 30, height: 30 },
        leave: { opacity: 0, width: 0, height: 0 },
    })

    const toggleItems = () => {
        if(state.length >0){
            setState([])
        }else {
            setState(initialState)
        }
    }

    return <>
        <button onClick={toggleItems}> Toggle items</button>
        {transitions((style, item) => (
        <animated.div style={{...style, backgroundColor: "green", }}>
            {item.key}
        </animated.div>
    ))}</>
}

export default TransitionMotionDemo