import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const WrongPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Wrong Page 💀'
        setTimeout(() => {
            document.title = 'SimiScan';
            navigate('/mainnet')
        }, 7000)
    })

  return (
    <section>
        <div className="nf-title">
            Wrong page 💀
        </div>
        <div className="nf-subtitle">
            Oops, looks like you're in the wrong page
        </div>
    </section>
  )
}

export const NotFoundResult = () => {
    useEffect(() => {
        document.title = 'Result Not Found';
    })
    return (
        <div>
            Your result was not found
        </div>
    )
}
