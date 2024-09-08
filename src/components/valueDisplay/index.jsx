import { useEffect,useRef } from "react"
function ValueDisplay({ value }) {
    const inputRef = useRef('')
    useEffect(() => {
        inputRef.current = value
    },[value])
    return (
      <div>
        <p>curent value: {value}</p>
        <p>previous value : {inputRef.current}</p>
      </div>
    );
}
export default ValueDisplay