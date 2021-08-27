export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log(prevState)
        console.log(args)
        const nextState = reducer(prevState, action, args)
        console.log(nextState)
        console.groupEnd()
        return nextState
    }
}