import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import NetworkInfo from "../components/NetworkInfo";

const commonStyling = {
    main: {
        fontSize: '28px',
        display: 'flex',
        margin: '40px',
    },
    mini: {
        fontSize: '17px',
        display: 'flex',
        margin: '40px',
    }
}

export const WrongPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Wrong Page 💀'
        setTimeout(() => {
            document.title = 'SimiScan';
            navigate('/')
        }, 7000)
    })

  return (
    <section>
        <div style={commonStyling.main}>
            Wrong page 💀
        </div>
        <div className="nf-subtitle" style={commonStyling.mini}>
            Oops, looks like you're in the wrong page
        </div>
    </section>
  )
}

export const NotFoundResult = () => {
    const navigate = useNavigate();
    const { network } = useParams();


    useEffect(() => {
        document.title = 'Result Not Found 💀';
        setTimeout(() => {
            document.title = 'SimiScan';
            navigate(`/${network}`)
        }, 5000)
    })
    return (
        <>
            <NetworkInfo network={network} />
            <div style={commonStyling.main}>
                Your result was not found 💀💀
            </div>
        </>
    )
}
