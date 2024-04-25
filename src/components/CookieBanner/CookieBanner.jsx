import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import style from "./CookieBanner.module.scss";


const CookieBanner = () => {

    //Create state to track if user has accepted cookies
    const [hasAcceptedCookie, setHasAcceptedCookie] = useState(false);


    const acceptCookies = () => {
        localStorage.setItem("cookieAccepted", true);
        setHasAcceptedCookie(true);
    }

    const declineCookies = () => {
        localStorage.setItem("cookieAccepted", false);
        setHasAcceptedCookie(false);
    }

    useEffect(() => {
        if (localStorage.getItem("cookieAccepted")) {
            setHasAcceptedCookie(true);
            ReactGA.initialize("G-KF58HRH7TQ");
        }

    }, [hasAcceptedCookie])


    return (
        <>
            {/* If user hasn't accepted cookies yet, display cookie banner  */}
            {!hasAcceptedCookie && (
                <div className={style.cookieBanner}>
                    <p>We use cookies to improve user experience, and analyze website traffic. For these reasons, we may share your site usage data with our analytics partners. By clicking “Accept Cookies,” you consent to store on your device all the technologies described in our Cookie Policy.</p>
                    <div>
                        <button onClick={acceptCookies}>Accept</button>
                        <button onClick={declineCookies}>Decline</button>
                    </div>
                </div>
            )}
        </>
    )

}

export default CookieBanner